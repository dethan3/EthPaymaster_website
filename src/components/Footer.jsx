import { getCopyrightYear } from "../utils/date";

export default function Footer() {
  return (
    <footer className="py-8 mt-auto bg-neutGray-800 dark:bg-neutGray-1050 px-mobileBound sm:px-6 sm:py-9 md:px-7 md:py-10 lg:px-8">
      <p className="mx-auto text-center font-heading">
        &copy; {getCopyrightYear()} AAstart. All rights reserved
      </p>
    </footer>
  );
}
