import Footer from "@/components/sharedComponents/Footer";
import Header from "@/components/sharedComponents/Header";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

export default function MainLayout() {

  // updating the dirction of the page 
  const {i18n} = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <main>
      <Header />

      <section>
        <Outlet />
      </section>

      
      <Footer />
    </main>
  )
}
