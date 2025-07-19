import { ArrowDown } from '@/assets/svg';
import useCategory from '@/hooks/useCategory';
import { getLocalizedText } from '@/utils/getLocalizedText';
import { useState } from 'react';

export default function MenuDropDown({lang , onSelectCategory , selectedCategory}) {

    const {data: categories , isLoading , error} = useCategory();
    const [isOpen, setIsOpen] = useState(false);


    const SelectedText = selectedCategory
        ? getLocalizedText(selectedCategory, 'category', lang)
        : lang === 'ar'
        ? 'كل المنتجات'
        : 'All Products';

    function handleSelect(category){
        onSelectCategory?.(category);
        setIsOpen(false);
        
    }
    return (
        <div className='mt-20 flex justify-center items-center w-full'>
            <div className='w-[300px] sm:w-[600px] h-auto flex justify-center items-center relative'>
                <button className='flex justify-between items-center w-full h-[50px] py-3 px-6 cursor-pointer border-2 border-[var(--color-text-brown)] rounded-full bg-yellow-500 relative'
                    onClick={()=> setIsOpen((prev)=> !prev)}
                    dir={lang === 'ar' ? 'rtl' : 'ltr'}
                >
                    <span className='text-[var(--color-text-brown)] text-base font-medium font-body' >
                        {SelectedText}
                    </span>
                    <ArrowDown  className={`w-[50px] h-[50px] text-[var(--color-text-brown)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}/>
                </button>

                {
                    isOpen && (
                        <ul className='absolute z-10 mt-2 top-[42px] rounded-md shadow-lg bg-white max-h-60 overflow-auto text-sm 
                                    scroll-smooth '
                            style={{ width: 'calc(100% - 2rem)' }}
                        >
                            {
                                categories?.map((category)=> {
                                    const categoryTitle = getLocalizedText(category , 'category' , lang);

                                    return (
                                        <li key={category.id}
                                            onClick={() => handleSelect(category)}
                                            className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                                        >{categoryTitle}</li>
                                    )
                                })
                            }

                        </ul>
                    )
                }
            </div>
        </div>
    )
}
