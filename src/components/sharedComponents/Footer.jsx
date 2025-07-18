import { Logo } from "@/assets/image";
import { Facebook, Instagram } from "@/assets/svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {

  const {t} = useTranslation();
  return (
    <section className="mt-10 h-[300px] w-full bg-text-brown">

      <div className="container flex  max-sm:flex-col items-center gap-5 w-full h-full">
        <div className="flex flex-col items-center sm:flex-row gap-5 my-auto w-full h-full">
          <img src={Logo} alt="logo" className="w-[100px] h-[100px] mt-5"/>

          <ul className="flex items-center gap-10 px-[20px]  ">
              <Link to={'/'} className="text-yellow-400 text-base hover:text-yellow-500" >{t("footer.home")}</Link>
              <Link to={'/Menu'} className="text-yellow-400 text-base hover:text-yellow-500" >{t("footer.menu")}</Link>
              <Link to={'/Contact'} className="text-yellow-400 text-base hover:text-yellow-500" >{t("footer.contact")}</Link>
              <Link to={'/About'} className="text-yellow-400 text-base hover:text-yellow-500">{t("footer.about")}</Link>
          </ul>
        </div>
        <div className="flex justify-center sm:justify-end items-center h-full w-full">
            <p className="text-yellow-400 text-base" >{t('footer.socailMedia')}</p>
            <span className="flex justify-center items-center cursor-pointer">
              <a href="https://www.facebook.com/karamelshaam/" target="_blank" rel="noopener noreferrer"><Facebook className="w-[40px] h-[40px]" /></a>
              <a href="https://www.instagram.com/karamelshamfoods/" target="_blank" rel="noopener noreferrer"><Instagram  className="w-[40px] h-[40px]" /></a>
            </span>
          </div>
      </div>
    </section>
  )
}
