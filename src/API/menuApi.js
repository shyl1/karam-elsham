import supabase from "@/supabase/supabaseClient";

export async function fetchMenu(){

    const {data:products , error} = await supabase
    .from('Menu')
    .select('*');

    if(error) throw new Error(error.message);

    return products;
}


