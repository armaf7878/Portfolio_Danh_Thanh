import github from "../assets/git_hub.png";
import recognize_logo from "../assets/recognize_logo.webp";
import porfolio_logo from "../assets/porfolio_logo.svg";
import food_logo from "../assets/Food_Ordering_logo.svg";
import rescue_logo from "../assets/Rescue_Logo.svg";
import skill from "../assets/Skills.svg"
export default function WorkExperience(){
    
    return(
        <section className="w-full h-auto px-4 pb-8 bg-p-900 md:px-55">
            <h1 className="pb-8 text-2xl font-Gothic text-n-50">Work Experience</h1>

            <div className="bg-radial from-p-500 to-black/80">
                <div className="flex flex-col justify-between gap-4 mb-4 md:flex-row">
                    <div className="hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] md:p-4  w-full md:w-[49%] bg-linear-to-br from-p-500 to-p-700 rounded-2xl h-60 border-t-3 border-p-200 flex items-center justify-center">
                        <img src={rescue_logo} className="object-contain w-[50%] h-[50%] mr-4">

                        </img>

                        <div className="w-[70%]">
                            <h1 className="mb-4 text-xl font-Gothic text-n-50">
                                Rescue Emergency Web
                            </h1>

                            <p className="mb-4 text-sm font-light font-Gothic text-n-50">
                                Nobody is abandoned amidst the rush of life.
                            </p>

                            <button className="p-2 font-light border-2 cursor-pointer hover:bg-n-50 hover:text-p-900 border-n-50 rounded-2xl text-n-50 font-Gothic"
                                onClick={() => document.getElementById("rescue_web").scrollIntoView({behavior: "smooth"})}
                            >
                                Detail Project
                            </button>
                        </div>
                    </div>

                    <div className="hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] md:p-4  w-full md:w-[49%] bg-linear-to-br from-p-500 to-p-700 rounded-2xl h-60 border-t-3 border-p-200 flex items-center justify-center">
                        <img src={food_logo} className="object-contain w-[50%] h-[50%] mr-4">

                        </img>

                        <div className="w-[70%]" >
                            <h1 className="mb-4 text-xl font-Gothic text-n-50">
                                Food Ordering Web
                            </h1>

                            <p className="mb-4 text-sm font-light font-Gothic text-n-50">
                                Real-time fast food ordering and delivery platform with smart tracking.
                            </p>

                            <button className="p-2 font-light border-2 cursor-pointer hover:bg-n-50 hover:text-p-900 border-n-50 rounded-2xl text-n-50 font-Gothic"
                                onClick={() => document.getElementById("food_ordering").scrollIntoView({behavior: "smooth"})}
                            >
                                Detail Project
                            </button>
                        </div>
                    </div>

                   
                </div>

              
                <div className="flex flex-col justify-between gap-4 mb-4 md:flex-row">
                    <div className="hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] md:p-4 p-2  w-full md:w-[49%] bg-linear-to-br from-p-500 to-p-700 rounded-2xl h-60 border-t-3 border-p-200 flex items-center justify-center">
                        <img src={porfolio_logo} className="object-contain w-[50%] h-[50%] mr-4">

                        </img>

                        <div className="w-[70%]">
                            <h1 className="mb-4 text-xl font-Gothic text-n-50">
                                Portfolio Web
                            </h1>

                            <p className="mb-4 text-sm font-light font-Gothic text-n-50">
                                Nothing to say—I'll let you judge.
                            </p>

                            <button className="p-2 font-light border-2 cursor-pointer hover:bg-n-50 hover:text-p-900 border-n-50 rounded-2xl text-n-50 font-Gothic">
                                Detail Project
                            </button>
                        </div>
                    </div>

                    <div className="hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] md:p-4 p-2  w-full md:w-[49%] bg-linear-to-br from-p-500 to-p-700 rounded-2xl h-60 border-t-3 border-p-200 flex items-center justify-center">
                        <img src={recognize_logo} className="object-contain w-[50%] h-[50%] mr-4">

                        </img>

                        <div className="w-[70%]">
                            <h1 className="mb-4 text-xl font-Gothic text-n-50">
                                Emotion Recognize App
                            </h1>

                            <p className="mb-4 text-sm font-light font-Gothic text-n-50">
                                Using machine learning to recognize human emotions.
                            </p>

                            <button className="p-2 font-light border-2 cursor-pointer hover:bg-n-50 hover:text-p-900 border-n-50 rounded-2xl text-n-50 font-Gothic"
                                onClick={() => document.getElementById("emotion_recognize").scrollIntoView({behavior: "smooth"})}
                            >
                                Detail Project
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-16">
                <h1 className="pb-8 text-2xl font-Gothic text-n-50">Technologies Using & More</h1>
                <h2 className="text-xl font-medium text-center font-Gothic text-n-50">Here are my  <span className="text-p-400">coding tools.</span></h2>
                <p className="font-light text-center text-md font-Gothic text-n-50" >I am prepared to learn new technologies to solve real-world problems.</p>
                <img src={skill} className="scale-80"></img>
            </div>
            
        </section>
    )
}
