import Mission from "@/components/AboutComponents/Mission";
import Today from "@/components/AboutComponents/Today";
import Values from "@/components/AboutComponents/Values";
import Vision from "@/components/AboutComponents/Vision";
import WhoAreWe from "@/components/AboutComponents/WhoAreWe";

export default function About() {
  return (
    <section className="flex flex-col gap-10 pt-[90px] mt-15">

      <WhoAreWe />
      <Vision />
      <Mission />
      <Values />
      <Today />

    </section>
    
  )
}
