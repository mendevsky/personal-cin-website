import { FaCriticalRole } from "react-icons/fa";
import { SiDungeonsanddragons } from "react-icons/si";
import { FaSteam } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { SiNasa } from "react-icons/si";
import { GiBookCover } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";

function About() {
    return (
        <div className="about grid grid-cols-2" id="about">
            <div className="flex justify-center items-center pt-15 flex-col px-4">
                <p className="text-7xl">About Me</p>

                <div className="rounded-md bg-gray-200 p-4 mt-15">
                    <p className="text-xl text-gray-800">
                        My journey with CS at CIn-UFPE begun long time ago, starting with a math teacher in high school that introduced me to this amazing place.
                        Although I still don't have many interesting stories to share, I believe that my personal journey with Autism has shaped my understanting of the world and my approach to problem-solving. I am passionate about exploring the intersection of technology and neurodiversity, and I am eager to contribute to projects that promote inclusivity and accessibility in the digital space.
                        My personal interests are diverse, from programming languages and IT support to tabletop RPGs and video games. I love technology, science, astronomy and pop culture, and I am always seeking new ways to expand my knowledge and skills. I am excited to continue my journey in the field of CS and to make a positive impact in the world through my work. 
                    </p>
                </div>

            </div>

            <div className="flex justify-center items-center pt-10 flex-col px-4">

                <p className="text-7xl">My Interests</p>
                  <div className="flex justify-center items-center mt-10">
                    <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="animate-bounce">
                        <FaPython size={50} className="text-gray-800 hover:text-gray-600 transition-colors duration-300" />
                    </a>
                    <a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer" className="animate-bounce ml-4">
                        <FaLinux size={50} className="text-gray-800 hover:text-gray-600 transition-colors duration-300" />
                    </a>
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="animate-bounce ml-4">
                        <RiReactjsFill size={50} className="text-gray-800 hover:text-gray-600 transition-colors duration-300" />
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="animate-bounce ml-4">
                        <FaJsSquare size={50} className="text-gray-800 hover:text-gray-600 transition-colors duration-300" />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="animate-bounce ml-4">
                        <FaGithub size={50} className="text-gray-800 hover:text-gray-600 transition-colors duration-300" />
                    </a>

                  </div>

                  <div className="flex justify-center items-center mt-10">
                    <a href="https://www.critrole.com/" target="_blank" rel="noopener noreferrer" className="animate-bounce">
                        <FaCriticalRole size={50} className="text-gray-800 hover:text-gray-600 transition-colors duration-300" />
                    </a>

                    <a href="https://dungeonsanddragons.com/" target="_blank" rel="noopener noreferrer" className="animate-bounce ml-4">
                        <SiDungeonsanddragons size={50} className="text-gray-800 hover:text-gray-600 transition-colors duration-300" />
                    </a>
                    <a href="https://store.steampowered.com/" target="_blank" rel="noopener noreferrer" className="animate-bounce ml-4">
                        <FaSteam size={50} className="text-gray-800 hover:text-gray-600 transition-colors duration-300" />
                    </a>
                    <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer" className="animate-bounce ml-4">
                        <SiNasa size={50} className="text-gray-800 hover:text-gray-600 transition-colors duration-300" />
                    </a>
                    <a href="https://www.goodreads.com/" target="_blank" rel="noopener noreferrer" className="animate-bounce ml-4">
                        <GiBookCover size={50} className="text-gray-800 hover:text-gray-600 transition-colors duration-300" />
                    </a>

                  </div>



            </div>

        </div>


    )

}
export default About;