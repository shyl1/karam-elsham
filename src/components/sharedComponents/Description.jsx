import { useTranslation } from "react-i18next";

export default function Description({textKey , textColor , textWidth , textSize}) {
    const {t} =useTranslation();

    return (
        <p className={`${textColor} ${textWidth} ${textSize}`}>{t(textKey)}</p>
    )
}
