import MenuDropDown from '@/components/MenuComponents/MenuDropDown';
import ProductCard from '@/components/MenuComponents/ProductCard';
import useProduct from '@/hooks/useProduct';
import useProductsByCategory from '@/hooks/useProductsByCategory';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProductDetails from './ProductDetails';


export default function Menu() {
    const {i18n} = useTranslation();

    //to open modal
    const [modalOpen , setModalOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    function openModal(productId) {
        setSelectedProductId(productId);
        setModalOpen(true);
    };

    const lang = (i18n.resolvedLanguage || i18n.language || 'ar').split('-')[0];

    const [selectedCategory, setSelectedCategory] = useState(null);

    const categoryId = selectedCategory?.id;

    const {data: productsByCategory , isLoading , error } = useProductsByCategory(categoryId);

    const {data: allProducts } = useProduct();


    if(isLoading) return <p className='pt-[92px]'>loading...</p>;

    if(error) return <p>error: {error.message}</p>

    const productFilter = allProducts?.slice(0,10);

    const products = categoryId ? productsByCategory : productFilter;
  return (
    <section className='pt-[92px] container'>

      {/* Menu DropDown */}
      <MenuDropDown lang={lang} onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />

      {/* Products */}
      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-full gap-5'>
          {
          products?.map((product)=>(
            <div key={product.item_id} className='flex gap-5 max-lg:px-5'>
              <ProductCard  product={product} lang={lang}  onClick={()=> openModal(product.item_id)}/>
            </div>
          ))
        }
      </div>
      {/* Modal */}
      {selectedProductId && (
          <ProductDetails open={modalOpen} setOpen={setModalOpen} id={selectedProductId} />
      )}

    </section>
  )
}
