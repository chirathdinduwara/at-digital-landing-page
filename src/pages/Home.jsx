import Btn from "../components/Btn";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

import pcImg from "../assets/pc.png";
import searchImg from "../assets/search.png";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <section className="max-w-[1064px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] text-center items-center my-[20px] p-3.5">
          <img
            className="w-[275px] lg:w-[346px] max-w-full"
            src={pcImg}
            alt="pc-icon"
          />
          <div className="flex flex-col gap-[20px] items-center lg:items-start">
            <h3 className="text-triadic font-sub-heading font-bold text-[27px]">
              Web & Mobile App Development
            </h3>
            <p className="text-center lg:text-start">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <Btn name={"LEARN MORE"} />
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-[30px] text-center items-center my-[20px] p-3.5">
          <div className="flex flex-col gap-[20px] items-center lg:items-start">
            <h3 className="text-triadic font-sub-heading font-bold text-[27px]">
              Digital Strategy Consulting
            </h3>
            <p className="text-center lg:text-start">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <Btn name={"LEARN MORE"} />
          </div>
          <img
            className="w-[275px] lg:w-[346px] max-w-full"
            src={searchImg}
            alt="pc-icon"
          />
        </div>
      </section>

      <section className="flex flex-col items-center lg:mx-[300px] lg:my-[20px] p-3.5">
        <h3 className="text-center font-sub-heading font-bold text-triadic text-[27px] ">
          Frequently asked questions
        </h3>
        <Faq
          que="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
          ans="Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
        />
        <Faq
          que="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
          ans="Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
        />
        <Faq
          que="Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?"
          ans="Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
        />
      </section>
      <Footer />
    </>
  );
};

export default Home;
