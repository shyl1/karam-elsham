import { Karam } from "@/assets/image";
import Description from "../sharedComponents/Description";
import Title from "../sharedComponents/Title";

export default function Mission() {
    return (
        <div className="container">
            <div className="flex max-md:flex-col justify-between items-center gap-5">
                <div className="flex flex-col gap-5 px-2">
                    <Title textColor={'text-[var(--color-text-brown)]'} paddingX={'px-2'} paddingY={'py-3'} textKey='about.mission' textSize={'text-base md:text-xl'} bgColor={'bg-yellow-400'} />

                    <Description textKey='about.karamMission' textColor={'text-black'} textWidth={'w-full lg:w-[600px]'} textSize={'text-sm sm:text-base md:text-[18px] lg:text-[25px]'} />
                </div>

                <div className=" flex justify-center items-center">
                    <img src={Karam} alt="karam el sham" className="min-w-[350px]  h-[300px] bg-center object-cover px-2" />
                </div>
            </div>
        </div>
    )
}
