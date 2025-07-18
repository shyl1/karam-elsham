import { Karam } from "@/assets/image";
import Title from "../sharedComponents/Title";
import { useTranslation } from "react-i18next";

export default function Mission() {
    const {t} = useTranslation();
    const karamMission = t("about.karamValues", { returnObjects: true });

    return (
        <div className="container">
            <div className="flex max-md:flex-col justify-between items-center gap-5">
                <div className="flex flex-col gap-5 px-2">
                    <Title textColor={'text-[var(--color-text-brown)]'} textWidth={'w-[150px]'} paddingX={'px-2'} paddingY={'py-3'} textKey='about.mission' textSize={'text-base md:text-xl'} bgColor={'bg-yellow-400'} />

                    <ul className="list-disc text-[var(--color-text-brown)] w-full lg:w-[600px] text-sm sm:text-base md:text-[18px] lg:text-[25px] ps-5 space-y-2">
                        {karamMission.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className=" flex justify-center items-center">
                    <img src={Karam} alt="karam el sham" className="min-w-[350px]  h-[300px] bg-center object-cover px-2" />
                </div>
            </div>
        </div>
    )
}
