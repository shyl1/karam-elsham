import supabase from "@/supabase/supabaseClient";

export async function fetchProductById(id){
    const {data ,error} = await supabase
    .from('Menu')
    .select('*')
    .eq('item_id' , id)
    .single();

    if (error) throw new Error(error.message);
    return data;
}