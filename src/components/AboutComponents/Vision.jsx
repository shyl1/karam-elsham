import { About } from "@/assets/image";
import Title from "../sharedComponents/Title";
import Description from "../sharedComponents/Description";

export default function Vision() {
    return (
        <div className="w-full h-[500px] bg-center object-contain flex justify-center relative " style={{backgroundImage: `url(${About})`}}>
            <div className="absolute inset-0 bg-black/60  "></div>
            <div className="container flex flex-col gap-3 px-2 z-10">
                <Title textColor={'text-[var(--color-text-brown)]'} paddingX={'px-2'} paddingY={'py-3'} textKey='about.vision' textSize={'text-base md:text-xl'} bgColor={'bg-yellow-400'} />

                <Description textKey='about.karamVision' textColor={'text-white'} textWidth={'lg:w-[961px]'} textSize={'text-sm sm:text-base md:text-[18px] lg:text-[25px]'} />
            </div>
        </div>
    )
}
