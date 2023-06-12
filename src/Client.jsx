import { createClient } from '@supabase/supabase-js';

const URL = "https://duymjymdyhyuowwujolu.supabase.co";

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1eW1qeW1keWh5dW93d3Vqb2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzMDgzMjcsImV4cCI6MTk5Nzg4NDMyN30.4JKXTQyVc4fpi8XzrBBE1kw7DeJAFGUvbHnAhvURQ_w';

export const supabase = createClient(URL, API_KEY);