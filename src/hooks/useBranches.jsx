import { fetchBranches } from "@/API/fetchBranches";
import { useQuery } from "@tanstack/react-query";


export default function useBranches() {
    return useQuery({
        queryKey: ['Branches'],
        queryFn: fetchBranches,
        staleTime: 1000 * 60 *60,
        refetchOnWindowFocus: false,
    });
}
