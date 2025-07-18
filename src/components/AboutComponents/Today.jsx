import Description from "../sharedComponents/Description";
import Title from "../sharedComponents/Title";


export default function Today() {
    return (
        <div className="container">
            <div className="flex flex-col gap-3 px-2">
                <Title textColor={'text-[var(--color-text-brown)]'} textWidth={'w-[150px]'} paddingX={'px-2'} paddingY={'py-3'} textKey='about.today' textSize={'text-base md:text-xl'} bgColor={'bg-yellow-400'} />

                <Description textKey='about.para' textColor={'text-black'} textWidth={'lg:w-[961px]'} textSize={'text-sm sm:text-base md:text-[18px] lg:text-[25px]'} />
            </div>
        </div>

    )
}
