import {
    createClient
} from "@supabase/supabase-js";
import e from "cors";

const supabase = createClient('', '');

export default supabase;