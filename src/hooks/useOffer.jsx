import { fetchOffers } from "@/API/offersAPI";
import {useQuery } from "@tanstack/react-query";

export default function useOffer() {
    return useQuery({
        queryKey: ['offers'],
        queryFn: fetchOffers,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
    });
}
