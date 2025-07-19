import { fetchCategory } from "@/API/category";
import { useQuery } from "@tanstack/react-query";

export default function useCategory() {
    return useQuery({
        queryKey: ['Categories'],
        queryFn: fetchCategory ,
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
    });
}
