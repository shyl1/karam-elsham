import Mission from "@/components/AboutComponents/Mission";
import Vision from "@/components/AboutComponents/Vision";
import WhoAreWe from "@/components/AboutComponents/WhoAreWe";

export default function About() {
  return (
    <section className="flex flex-col gap-10 pt-[90px] mt-20">

      <WhoAreWe />
      <Vision />
      <Mission />

    </section>
    
  )
}
