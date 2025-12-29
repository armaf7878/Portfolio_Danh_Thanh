import icon_linked from "../assets/icon_linked.webp";
import icon_github from "../assets/icon_github.webp";
import icon_gmail from "../assets/icon_gmail.webp";
export default function Footer(){
    return(
        <section id="contact" className="relative w-full h-auto px-4 bg-p-600 md:px-55">
            <h1 className="pt-4 pb-8 text-2xl font-Gothic text-n-50">Contact</h1>
            <p className="text-sm font-light font-Gothic text-n-50">Engineering scalable software solutions for real-world challenges. 
                <span><br></br></span>
                Let's connect.

            </p>

            <div className="flex items-center">
                <a href="https://github.com/armaf7878" target="_blank"><img className="object-contain w-13" src={icon_github}></img></a>

                <a href="https://www.linkedin.com/in/andy-nguyen-1b2b1b338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"><img className="object-contain w-30" src={icon_linked}></img></a>

                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tinhoc7649@gmail.com" target="_blank"><img className="object-contain w-16" src={icon_gmail}></img></a>
            </div>
        </section>
    )
}