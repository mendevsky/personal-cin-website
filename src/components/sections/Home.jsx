import { FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




function Home (){
    return (

        <section className="home grid grid-cols-2 py-4" id="home">
              <div className="flex justify-center items-center pt-35 flex-col px-4"> {/* Left side of the home section, where the student will be introduced */}
                <p className="text-7xl font-bold mb-10 bg-gradient-to-r from-red-900 to-red-900 bg-clip-text text-transparent">
                    Hello, world!</p>
                
                <div className="p-6 rounded-xl border border-gray-200 shadow-md hover:translate-y-1 hover:border-red-500 hover:shadow-[0_2px_08px_rgba(255,0,0,0.3)] transition-all">
                    <p className="text-gray-700 mb-4">
                        My name is Iasmym Mendes and I am a student at Universidade Federal de Pernambuco, currently pursuing a degree in Computer Science. I have a strong passion for technology and enjoy exploring new programming languages and frameworks. In my free time, I like to work on personal projects, study topics in Neurodiversity and explore the world of pop culture.
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center pt-10 flex-col px-4"> {/*Right side of the home section, with student photo and social media logos */}
                <img src={"src/assets/iasFace.png"} alt="Iasmym Mendes" className="h-120 w-auto border-4 border-white rounded-full" />
                <div className="flex justify-center items-center mt-4">
                    <a href="https://github.com/mendevsky" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={50} className="text-red-900 hover:text-red-600 hover:animate-bounce transition-colors duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/iaslmf/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={50} className="text-red-900 hover:text-red-600 hover:animate-bounce transition-colors duration-300 ml-4" />
                    </a>
                    <a href="mailto:ilmf@cin.ufpe.br" target="_blank" rel="noopener noreferrer">
                        <MdOutlineAlternateEmail size={50} className="text-red-900 hover:text-red-600 hover:animate-bounce transition-colors duration-300 ml-4" />
                    </a>
                    
                    <a href="https://www.instagram.com/iaslmf/" target="_blank" rel="noopener noreferrer"    >
                        <FaInstagram size={50} className="text-red-900 hover:text-red-600 hover:animate-bounce transition-colors duration-300 ml-4" />
                    </a>
                    <a href="https://twitter.com/_iaslmf" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter size={50} className="text-red-900 hover:text-red-600 hover:animate-bounce transition-colors duration-300 ml-4" />
                    </a>



                </div>
            </div>
       </section>


    )
}

export default Home;
