import { useTranslation } from "react-i18next"

export default function OrderNow({textKey ,bgColor , textColor , hoverColor  , paddingY , paddingX}) {
    const {t} = useTranslation();
    return (
        <button className={`${paddingX} ${paddingY} ${bgColor} ${textColor} ${hoverColor} font-medium cursor-pointer rounded-[5px] font-body`}>{t(textKey)}</button>
    )
}


//px-6
//py-2 