import Footer from "@/components/sharedComponents/Footer";
import Header from "@/components/sharedComponents/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {

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
