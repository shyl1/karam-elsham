import { fetchProductsBasedCategory } from "@/API/fetchPeoductsBasedOnCategoryID";
import { useQuery } from "@tanstack/react-query";

export default function useProductsByCategory( categoryId) {
    return useQuery({
        queryKey: ['Menu' , categoryId],
        queryFn:()=> fetchProductsBasedCategory(categoryId),
        enabled: !!categoryId,
    });
}
