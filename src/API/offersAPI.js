import supabase from "@/supabase/supabaseClient";


export async function fetchOffers(){

    const {data:offers , error} = await supabase
    .from('offers')
    .select('*');

    if(error) throw new Error(error.message);

    return offers;
}


export async function fetchDynamicOffers(){
    const {data: dynamicOffers , error} = await supabase
    .from('DynamicOffers')
    .select('*');

    if(error) throw new Error(error.message);
    

    return dynamicOffers;
}