import Btn from "./Btn";

const Hero = () => {
  return (
    <section className=" w-full relative overflow-hidden">
      
      <img 
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] object-cover" 
        src="../src/assets/hero.jpg" 
        alt="Hero" 
      />

      
      <div className="px-[24px] py-[20px] md:px-8 lg:px-[24px] lg:py-[40px]
                      text-center lg:text-left 
                      lg:bottom-[10%] lg:left-[5%] lg:w-[630px]
                      relative lg:absolute 
                      bg-gradient-to-r from-dark to-analogous-2 flex flex-col gap-[20px]">

        <p className="text-[36px] text-start  sm:text-[36px] md:text-[48px] lg:text-[48px] font-bold  text-accent capitalize">
          We crush your competitors, goals, and sales records - without the B.S.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Btn name="Get free consultation" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
