import Hero from "./Hero";
import HeroImg from "./HeroImg";

export default function Home() {
  console.log("home");

  return (
    <>
      <div
       className="flex flex-col  md:flex-row items-center mt-20 gap-10 md:gap-16 px-6 pt-16 pb-24
             rounded-2xl shadow-lg backdrop-blur-lg bg-violet/10 dark:bg-violet/10
             border border-violet/20 dark:border-white/20"
      >
        <Hero />
        <HeroImg />
      </div>
    </>
  );
}
