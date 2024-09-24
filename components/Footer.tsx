import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
          width={100}
          height={100}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[55vw]">
          Ready to take <span className="text-purple">your</span> Digital
          presence to next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:rehmanwaraich107@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024{" "}
          <span className="text-[#CBACF9] font-medium">M.Rehman Waraich</span>
        </p>

        <div className="flex items-center md:gap-3 gap-6 max-sm:mt-10">
          {socialMedia.map((info) => (
            <Link href={info.url} target="_blank" key={info.id}>
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-transform ease-in-out duration-300 transform hover:scale-110 hover:border-[#CBACF9] hover:shadow-lg">
                <Image src={info.img} alt="icons" width={20} height={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
