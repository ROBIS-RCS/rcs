import { createClient } from "@supabase/supabase-js";

 const supabase = createClient(
    "https://pyjapcmszatgzeygwhna.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5amFwY21zemF0Z3pleWd3aG5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEzNjc1MjcsImV4cCI6MjAyNjk0MzUyN30.WWTxiXOWWCwmqynxKHWeoTBzu1JBtbWYsbtxIEN5nmA"
    )
export default supabase ;