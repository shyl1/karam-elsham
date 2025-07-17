import { useTranslation } from "react-i18next"

export default function Title({textKey , textColor}) {
    const {t} =useTranslation();

    return (
        <h1 className={`text-sm md:text-xl font-medium font-body ${textColor}`}>{t(textKey)}</h1>
    )
}
