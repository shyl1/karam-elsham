import supabase from "@/supabase/supabaseClient";


export async function fetchBranches(){
    
    let {data: branches , error} = await supabase
    .from('Branches')
    .select('*');

    if(error) throw new Error(error.message);

    return branches;
}