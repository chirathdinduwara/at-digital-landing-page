import logo from "../src/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-accent px-[40px] py-[20px] pb-[20px] lg:px-[40px] lg:py-[80px] lg:pb-[20px] flex flex-col gap-[40px]">
      <div className="flex flex-col lg:flex-row justify-between gap-[40px]">
        <div className="flex flex-col  gap-[20px] max-w-[413px]">
          <img src={logo} alt="logo" className="max-w-[226px] cursor-pointer" />
          <p className="font-sub-body">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="flex flex-col gap-[20px] md:flex-row lg:flex-row justify-between max-w-[530px] w-full">
          <div className="flex flex-col gap-[12px]">
            <h3 className="font-semibold text-[21px]">Our Technologies</h3>
            <ul className="flex flex-col gap-[12px]">
              <li>
                <a href="#">ReactJS</a>
              </li>
              <li>
                <a href="#">Gatsby</a>
              </li>
              <li>
                <a href="#">NextJS</a>
              </li>
              <li>
                <a href="#">NodeJS</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[12px]">
            <h3 className="font-semibold text-[21px]">Our Services</h3>
            <ul className="flex flex-col gap-[12px]">
              <li>
                <a href="#">Social media Marketing</a>
              </li>
              <li>
                <a href="#">Web & Mobile App Development</a>
              </li>
              <li>
                <a href="#">Data & Analytics</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[8px] items-center">
        <hr className="w-full max-w-[630px] border-t-2 border-accent-2" />
        <ul className="flex items-center gap-[16px] justify-center">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
