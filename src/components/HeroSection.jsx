import { useState } from "react";
import character from "../assets/character_removebg.png";
import character2 from "../assets/character2_removebg.png";
import "../styles/home.css";

export default function HeroSection() {
  const [avtClick, setAvtClick] = useState(true);

  const hanldeAvtClick = () => {
    setAvtClick((prev) => !prev);
  };

  return (
    <section id="about" className="w-full bg-p-900 pt-[60px]">
      <div className="w-full max-w-6xl px-4 pb-16 mx-auto md:px-6">
        <div className="flex flex-col items-center gap-6 mt-8 md:flex-row md:items-center md:gap-10">
          {avtClick ? (
            <img
              src={character}
              alt="Avatar"
              className="h-[260px] w-[260px] cursor-pointer rounded-full bg-radial-gradient object-fit shadow-[0_0_20px_rgba(168,85,247,0.8)] animate-radial md:h-[320px] md:w-[320px]"
              onClick={hanldeAvtClick}
            />
          ) : (
            <div
              className="h-[260px] w-[260px] cursor-pointer overflow-hidden rounded-full bg-radial-gradient shadow-[0_0_20px_rgba(140,85,247,1)] animate-radial md:h-[320px] md:w-[320px]"
              onClick={hanldeAvtClick}
            >
              <img src={character2} alt="Avatar 2" className="w-full h-full object-fit" />
            </div>
          )}

          <div className="w-full text-center md:text-left">
            <p className="font-Gothic text-n-50">
              Hello! I Am{" "}
              <span className="inline-block px-3 py-1 border rounded-full border-n-50 text-p-400">
                Ngô Thành Danh
              </span>
            </p>
            <h2 className="mt-3 text-xl font-light font-Gothic text-n-50 md:text-2xl">
              Full Stack Developer
            </h2>
            <h1 className="mt-3 text-3xl font-Gothic text-n-50 md:text-5xl">
              Where creativity meets <span className="text-p-400">logic</span>
            </h1>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-Gothic text-n-50 md:text-3xl">I'm a Web App Developer</h2>

          <div className="flex mt-3 ">
            <img
                src="https://upload.wikimedia.org/wikipedia/vi/1/1e/Hoc_vien_Hang_khongVN.PNG"
                alt="Vietnam Aviation Academy"
                className="object-contain w-8 h-8 mr-4"
                loading="lazy"
            />
            <p className="text-lg font-light font-Gothic text-n-50 md:text-xl">
              Now, I'm a final-year <span className="text-p-400">Information Technology</span> student at
              the Vietnam Aviation Academy. 
              
            </p>
            
          </div>

          <p className="pl-4 mt-4 text-base border-l-2 border-white/30 font-Gothic font-extralight text-n-50 md:text-lg">
            I am pursuing a Web/App Intern position with a primary focus on backend development and web
            applications. I have experience working with multiple programming languages, various database
            systems, and training and integrating AI models into projects. I am highly motivated, eager to
            learn, and committed to contributing my skills and efforts to support the company’s growth while
            continuously improving as a backend-oriented software engineer.
          </p>
        </div>
      </div>
    </section>
  );
}
