import supabase from "@/supabase/supabaseClient";

export async function fetchCategory(){

    const {data:Categories , error} = await supabase
    .from('Categories')
    .select('*');

    if(error) throw new Error(error.message);

    return Categories;
}