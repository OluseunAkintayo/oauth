import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Nav = styled.nav`
	height: 2.5rem;
	margin-top: -0.5rem;
	@media(max-width: 968px) {
		border-bottom: 1px solid #c2ccd6;
		padding: 0 2rem;
	}
`;
const Wrapper = styled.div`
	display: flex;
	@media(max-width: 968px) {
		justify-content: center;
	}
`;
const Link = styled.a`
	display: flex;
	align-items: center;
	padding: 0.4rem 0.75rem;
	width: auto;
	span {
		font-size: 1rem;
	}
	&:hover {
		border-radius: 0.25rem;
		background: #E8E8E8;
	}
	&:nth-child(2) {
		border-bottom: 2px solid #FD8C73;
		font-weight: 600;
	}
	.number {
		background: rgba(175,184,193,0.2);
		width: 2.25rem;
		height: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 40%;
		margin-left: 0.25rem;
		font-size: 0.875rem;
	}
`;
const Img = styled.img`
	width: 1.125rem;
	height: 1.125rem;
	margin-right: 0.375rem;
	@media(max-width: 576px) {
		display: none;
	}
`;


const TopNav = () => {
	const repos = useSelector(state => state.profile.repos.data);
	return (
		<Nav>
			<Wrapper>
				<Link href="#">
					<Img src="/assets/book.svg" alt="Book" />
					<span>Overview</span>
				</Link>
				<Link href="#">
					<Img src="/assets/repo.svg" alt="" />
					<span>Repositories</span>
					<span className="number">
						{repos && repos.length}
					</span>
				</Link>
				<Link href="#">
					<Img src="/assets/projects.svg" alt="" />
					<span>Projects</span>
				</Link>
				<Link href="#">
					<Img src="/assets/package.svg" alt="" />
					<span>Packages</span>
				</Link>
				<Link href="#">
					<Img src="/assets/star.svg" alt="" />
					<span>Stars</span>
				</Link>
			</Wrapper>
		</Nav>
	)
}

export default TopNav;