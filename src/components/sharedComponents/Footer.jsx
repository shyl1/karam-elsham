import { Logo } from "@/assets/image";
import { Facebook, Instagram } from "@/assets/svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {

  const {t} = useTranslation();
  return (
    <section className="mt-10 h-[300px] w-full bg-text-brown">
      <div className="container flex flex-col justify-center items-center w-full h-full pt-5">
        {/* logo and pages links */}
        <div className="flex items-center gap-5 ">
          <div className="flex flex-col items-center sm:flex-row gap-5 my-auto">
          <img src={Logo} alt="logo" className="sm:w-[100px] sm:h-[100px] w-[75px] h-[75px] mt-5 "/>

          <ul className="flex flex-col items-center gap-2 sm:gap-5 px-[20px]">
              <Link to={'/'} className="text-yellow-400 text-xs sm:text-base hover:text-yellow-500" >{t("footer.home")}</Link>
              <Link to={'/Menu'} className="text-yellow-400 text-xs sm:text-base hover:text-yellow-500" >{t("footer.menu")}</Link>
              <Link to={'/Contact'} className="text-yellow-400 text-xs sm:text-base hover:text-yellow-500" >{t("footer.contact")}</Link>
              <Link to={'/About'} className="text-yellow-400 text-xs sm:text-base hover:text-yellow-500">{t("footer.about")}</Link>
          </ul>
        </div>

        {/* social links */}
        <div className="flex flex-col justify-center items-center gap-y-5">
            <p className="text-yellow-400 text-xs sm:text-base" >{t('footer.socailMedia')}</p>
            <span className="flex flex-col justify-center items-center cursor-pointer gap-y-5">
              <a href="https://www.facebook.com/karamelshaam/" target="_blank" rel="noopener noreferrer"><Facebook className="w-[40px] h-[40px]" /></a>
              <a href="https://www.instagram.com/karamelshamfoods/" target="_blank" rel="noopener noreferrer"><Instagram  className="w-[40px] h-[40px]" /></a>
            </span>
        </div>

        {/* opening hours */}
        <div className="flex flex-col gap-5 items-center">
            <p className="text-yellow-400 text-xs sm:text-base ">{t('contactPage.openHours')}</p>
            <p className=" text-yellow-400 text-xs sm:text-base ">{t('contactPage.from')}</p>
            <p className="text-yellow-400 text-xs sm:text-base ">{t('contactPage.nine')}</p>
            <p className=" text-yellow-400 text-xs sm:text-base ">{t('contactPage.to')}</p>
            <p className="text-yellow-400 text-xs sm:text-base">{t('contactPage.two')}</p>
        </div>
        </div>
        {/* copy rights */}
      <div className="container flex justify-center items-center border-t border-[var(--color-btn-bg-yellow)] w-full">
        <p className="text-yellow-400 text-xs sm:text-base">&copy; Karam el Sham. All rights reserved.</p>
      </div>
      </div>
    </section>
  )
}
