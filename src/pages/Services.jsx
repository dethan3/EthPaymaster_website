import { Link } from "react-router-dom";
import { generalServices } from "../constants/data";
import ServiceList from "../components/ServiceList";
import SpecialtiesList from "../components/SpecialtiesList";

export default function Services() {
  return (
    <>
      <h1 className="mt-9 sm:mt-10 md:mt-11 text-center max-w-[18em]">
        Services
      </h1>
      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h2 className="text-center">How Can I Help You?</h2>
        <ServiceList services={generalServices} />
      </section>
      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h2 className="text-center">Specialties</h2>
        <SpecialtiesList />
      </section>
    </>
  );
}
