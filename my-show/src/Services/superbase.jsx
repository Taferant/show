// services/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://blwubmufphuhzkvcamen.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsd3VibXVmcGh1aHprdmNhbWVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwNzIwMTcsImV4cCI6MjAxNjY0ODAxN30.qnuGkMOoGjbDzwaJ2iOBiFIY4HudTp6lBS-CN5y4ttg'
);

export default supabase;
