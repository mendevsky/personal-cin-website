import { FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



function Home (){
    return (

        <section className="home grid grid-cols-2" id="home" >
              <div className="flex justify-center items-center pt-35 flex-col px-4"> {/* Left side of the home section, where the student will be introduced */}
                <p className="text-7xl">Hello, world!</p>
                
                <div className="rounded-md bg-gray-200 p-4 mt-15">
                    <p className="text-xl text-gray-800">
                        My name is Iasmym Mendes and I am a student at Universidade Federal de Pernambuco, currently pursuing a degree in Computer Science. I have a strong passion for technology and enjoy exploring new programming languages and frameworks. In my free time, I like to work on personal projects, study topics in Neurodiversity and explore the world of pop culture.
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center pt-10 flex-col px-4"> {/*Right side of the home section, with student photo and social media logos */}
                <img src={"src/assets/iasFace.png"} alt="Iasmym Mendes" className="h-120 w-auto border-4 border-white rounded-full" />
                <div className="flex justify-center items-center mt-4">
                    <a href="https://github.com/mendevsky" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={50} className="text-gray-800 hover:text-gray-600 hover:animate-bounce transition-colors duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/iaslmf/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={50} className="text-gray-800 hover:text-gray-600 hover:animate-bounce transition-colors duration-300 ml-4" />
                    </a>
                    <a href="mailto:ilmf@cin.ufpe.br" target="_blank" rel="noopener noreferrer">
                        <MdOutlineAlternateEmail size={50} className="text-gray-800 hover:text-gray-600 hover:animate-bounce transition-colors duration-300 ml-4" />
                    </a>
                    
                    <a href="https://www.instagram.com/iaslmf/" target="_blank" rel="noopener noreferrer"    >
                        <FaInstagram size={50} className="text-gray-800 hover:text-gray-600 hover:animate-bounce transition-colors duration-300 ml-4" />
                    </a>
                    <a href="https://twitter.com/_iaslmf" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter size={50} className="text-gray-800 hover:text-gray-600 hover:animate-bounce transition-colors duration-300 ml-4" />
                    </a>



                </div>
            </div>
        </section>

    )
}

export default Home;
