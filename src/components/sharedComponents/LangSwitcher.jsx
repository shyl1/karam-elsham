import { ArrowDown } from "@/assets/svg";
import { languages } from "@/constants";
import { useState } from "react";
import { useTranslation } from "react-i18next"

export default function LangSwitcher() {

    const {i18n} = useTranslation();

    const [isOpen, setIsOpen]= useState(false);

    function changeLang(lang){
        i18n.changeLanguage(lang);
        setIsOpen(false);
    }


    return (
        <div className="font-body">
            <button onClick={()=> setIsOpen((prev)=> !prev)} className="relative centering gap-1 text-white">{i18n.language} <ArrowDown className="w-[20px] h-[20px] cursor-pointer" /></button>

            {
                isOpen && (
                    <ul className="absolute sm:left-0 p-1 bg-white border-gray-200 border-1 z-10">
                        {
                            languages.map(({code , label})=> (
                                <li key={code} onClick={() => changeLang(code)} className="cursor-pointer hover:bg-gray-100 text-[14px] text-cairo">{label}</li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}
