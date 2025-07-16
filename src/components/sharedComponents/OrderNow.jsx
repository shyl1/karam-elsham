import { useTranslation } from "react-i18next"

export default function OrderNow({textKey ,bgColor , textColor , hoverColor }) {
    const {t} = useTranslation();
    return (
        <button className={`py-2 px-6 ${bgColor} ${textColor} ${hoverColor} font-medium cursor-pointer rounded-[5px] font-body`}>{t(textKey)}</button>
    )
}
