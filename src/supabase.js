import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wdyrxsqakybdkwogoqas.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkeXJ4c3Fha3liZGt3b2dvcWFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0NDYxMDMsImV4cCI6MjAxMTAyMjEwM30.WD_tcR5MUpy-xEZ36k4oh8CxXWhjyBWRuTbe1z6-AHI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
