import { createClient } from "@supabase/supabase-js";

const { REACT_APP_SUPABASE_ANON_KEY } = process.env;

const supabase = createClient("https://tavntvczznooztyiefvr.supabase.co", REACT_APP_SUPABASE_ANON_KEY);

export { supabase };