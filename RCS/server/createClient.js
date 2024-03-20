import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://qrhldurvoidcgzwneaki.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyaGxkdXJ2b2lkY2d6d25lYWtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NjI4MjksImV4cCI6MjAyNjMzODgyOX0.nU8OayWzagpgq3orYQUt3xq6dpwTIZELdWCW0tG-hJk"
    )