import { useState } from "react";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";

const Faq = ({ que, ans }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="p-[24px] flex flex-col gap-[13px]  w-full max-w-[846px]">
      <div
        className="flex justify-between w-full max-w-[846px] cursor-pointer gap-[40px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3
          className={`text-[20px] font-bold transition-colors duration-200 ${
            isOpen ? "text-light" : "text-black"
          }`}
        >
          {que}
        </h3>
        {isOpen ? <CgMathMinus className="text-light text-[30px] "  /> : <CgMathPlus className=" text-[30px] " />}
      </div>

      {isOpen && (
        <div className="text-light  max-w-[846px]">
          <p>{ans}</p>
        </div>
      )}
    </section>
  );
};

export default Faq;
