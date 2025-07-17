import { fetchDynamicOffers } from "@/API/offersAPI";
import { useQuery } from "@tanstack/react-query";

export default function useDynamicOffers() {
    return useQuery({
        queryKey: ['DynamicOffers'],
        queryFn: fetchDynamicOffers,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
    });
}
