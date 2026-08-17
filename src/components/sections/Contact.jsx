import emailjs from 'emailjs-com'
import { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",

    })

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message sent successfully!");
            setFormData({name: "", email: "", message: ""});
        }).catch((error) => {
            alert("Oops! Something went wrong. Please try again.");
            
        })
    } 

    return (


        <section className="min-h-screen flex items-center justify-center py-20 " id="contact">
            <div className="px-4 w-full min-w-[200px] md:w-[400px] sm:w-2/3 p-6">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-red-900 to-red-900 bg-clip-text text-transparent text-center">
                    Get in touch!

                <div className="flex justify-center items-center">

                <div className="flex justify-center items-center mt-5">
                    <a href="https://github.com/mendevsky" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} className="text-red-900 hover:text-red-600 hover:animate-bounce transition-colors duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/iaslmf/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} className="text-red-900 hover:text-red-600 hover:animate-bounce transition-colors duration-300 ml-4" />
                    </a>
                    <a href="https://www.instagram.com/iaslmf/" target="_blank" rel="noopener noreferrer"    >
                        <FaInstagram size={30} className="text-red-900 hover:text-red-600 hover:animate-bounce transition-colors duration-300 ml-4" />
                    </a>
                    <a href="https://twitter.com/_iaslmf" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter size={30} className="text-red-900 hover:text-red-600 hover:animate-bounce transition-colors duration-300 ml-4" />
                    </a>

                </div>

                </div>
                
                <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" id="name" name="name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Your name" className="text-2xl w-full bg-red-900 border border-gray-500 rounded text-white transition placeholder:text-black/50 placeholder:text-1xl focus:outline-none focus:ring-2 focus:ring-blue-500 hover:translate-y-1 transition-all " />
                    </div>
                    <div className="relative">
                        <input type="email" id="email" name="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="example@gmail.com" className="text-2xl w-full bg-red-900 border border-gray-500 rounded text-white transition placeholder:text-black/50 placeholder:text-1xl focus:outline-none focus:ring-2 focus:ring-blue-500 hover:translate-y-1 transition-all" />
                    </div>
                    <div className="relative">
                        <textarea id="message" name="message" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Your message" rows="5" className="text-2xl w-full bg-red-900 border border-gray-500 rounded  text-white transition placeholder:text-black/50 placeholder:text-1xl focus:outline-none focus:ring-2 focus:ring-blue-500 hover:translate-y-1 transition-all" ></textarea>
                    </div>
                    <button type="submit" className="text-2xl w-full bg-red-900 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Send Message
                    </button>
                </form>

                </h2>

            

            </div>
            
            



        </section>

    );
}

export default Contact;