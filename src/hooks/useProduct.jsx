import { fetchMenu } from "@/API/menuApi";
import { useQuery } from "@tanstack/react-query";

export default function useProduct() {
    return useQuery({
        queryKey: ['Menu'],
        queryFn: fetchMenu,
        staleTime: 1000 * 5 * 60,
        refetchOnWindowFocus: false,
    });
}
