import { useTranslation } from "react-i18next"

export default function Title({textKey , textColor , textSize , bgColor , paddingX , paddingY}) {
    const {t} =useTranslation();

    return (
        <h1 className={`${textSize} ${paddingX} ${paddingY} w-[150px] rounded-md font-medium font-body flex justify-center items-center ${textColor} ${bgColor}`}>{t(textKey)}</h1>
    )
}
