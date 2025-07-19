import supabase from "@/supabase/supabaseClient";

export async function fetchProductsBasedCategory(categoryId){

    //fetch all if there is no selection
    let query = supabase.from('Menu').select('*');

    // filter based on category
    if (categoryId) {
        query = query.eq('category_id', categoryId);
    }

    const {data ,error} = await query;

    if (error) throw new Error(error.message);
    return data;
}