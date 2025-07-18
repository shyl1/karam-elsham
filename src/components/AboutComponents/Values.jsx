import { Section } from "@/assets/image";
import Title from "../sharedComponents/Title";
import { useTranslation } from "react-i18next";

export default function Values() {
    const {t} = useTranslation();
    const karamValues = t("about.karamValues", { returnObjects: true });

    return (
        <div className="w-full flex justify-center items-center h-[300px] sm:h-[600px] bg-center object-contain" style={{backgroundImage: `url(${Section})`}}>
            <div className="container flex justify-center items-center ">
                <div className=" h-2/3 flex flex-col px-2">
                    <Title textColor={'text-[var(--color-text-brown)]'} textWidth={'w-[50px]'} paddingX={'px-2'} paddingY={'py-3'} textKey='about.values' textSize={'text-base md:text-2xl'} bgColor={'bg-transparent'} />

                    <ul className="list-disc text-[var(--color-text-brown)] w-full lg:w-[600px] text-sm sm:text-base md:text-[18px] lg:text-[25px] ps-5 space-y-2">
                        {karamValues.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            
        </div>
    )
}
