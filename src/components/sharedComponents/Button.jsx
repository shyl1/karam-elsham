import { LeftArrow } from "@/assets/svg";
import { useTranslation } from "react-i18next";

export default function Button({textKey , borderColor , borderSize }) {
    const {t} = useTranslation();
    return (
        <button className={`px-3 py-1 ${borderColor} ${borderSize} text-[var(--color-text-brown)] rounded-[5px] bg-yellow flex justify-between items-center gap-1 cursor-pointer hover:bg-btn-bg-yellow`}>
            {t(textKey)}
            <LeftArrow className='text-[var(--color-text-brown)] w-[15px] h-[15px]' />
        </button>
    )
}
