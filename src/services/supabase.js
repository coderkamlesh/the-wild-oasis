import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qhzupeswimkddvfwkqom.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoenVwZXN3aW1rZGR2ZndrcW9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIxNDQ2MDEsImV4cCI6MjAxNzcyMDYwMX0.eMwPT_nQPCzst1aUAfTY4iQhY03PMRtypcCikR4SKdc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
