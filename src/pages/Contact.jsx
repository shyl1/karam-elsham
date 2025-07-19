import { Cooks } from "@/assets/image";
import { Clock, Facebook, Instagram, PhoneCall } from "@/assets/svg";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const {t} = useTranslation();
  return (
    <section className="pt-[92px]">

      <div className="w-full h-[500px] mt-20 relative bg-center bg-cover flex justify-center" style={{backgroundImage: `url(${Cooks})`}}>
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* contact and opening hours */}
      <div className="w-full absolute flex justify-center ">
        <div className="container absolute z-20 bottom-[-10px] max-lg:flex-col flex justify-between items-center gap-5 ">
          {/* contact */}
          <div className="w-[250px] sm:w-[400px] md:w-[600px] lg:w-1/2 h-[250px] flex flex-col bg-btn-bg-yellow rounded-3xl p-5 lg:p-11">
            <h1 className="flex justify-center items-center gap-3 text-lg md:text-3xl font-body font-bold text-[var(--color-text-brown)]">
              {t('contactPage.contact')}
              <span><PhoneCall className="w-[60px] h-[60px]" /></span>
            </h1>

            <div className="flex flex-col justify-center items-center gap-5 mt-5 text-[var(--color-text-brown)]">
              <span className="flex items-center gap-3 w-full md:w-1/2 font-body font-bold">- {t('contactPage.phone')}:
                <span>1950</span>
              </span>
              {/* social and icons */}
              <span className="flex items-center gap-3 w-full md:w-1/2 font-body font-bold text-xs md:text-sm">
                - {t('contactPage.socailMedia')}:
                <span className="flex justify-center items-center cursor-pointer">
                  <a href="https://www.facebook.com/karamelshaam/" target="_blank" rel="noopener noreferrer"><Facebook className="w-[40px] h-[40px]" /></a>
                  <a href="https://www.instagram.com/karamelshamfoods/" target="_blank" rel="noopener noreferrer"><Instagram  className="w-[40px] h-[40px]" /></a>
                </span>
              </span>
            </div>
          </div>

          {/* opening hours */}
          <div className="w-[250px]  sm:w-[400px] md:w-[600px] lg:w-1/2 h-[250px] flex flex-col justify-center items-center gap-3 bg-btn-bg-yellow rounded-3xl p-5 lg:p-11 text-[var(--color-text-brown)] font-body">
            <p className="flex items-center gap-3 text-lg md:text-3xl font-bold ">{t('contactPage.openHours')}<span><Clock className="w-[60px] h-[60px]" /></span></p>
            <p className=" font-bold text-xs md:text-sm">{t('contactPage.from')}</p>
            <p className="font-extrabold text-sm ">{t('contactPage.nine')}</p>
            <p className=" font-bold text-xs md:text-sm">{t('contactPage.to')}</p>
            <p className="font-extrabold text-sm ">{t('contactPage.two')}</p>
          </div>
        </div>
      </div>

      {/* branches */}

    </section>
  )
}
