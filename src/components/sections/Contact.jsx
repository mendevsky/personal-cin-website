import emailjs from 'emailjs-com'
import { useState } from 'react'

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

        <section className="min-h-screen flex justify-center items-center" id="contact">
            <div className="p-4 w-150">
                <h2 className="text-5xl">Get in touch with me!
                
                <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" id="name" name="name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Your name" className="w-full bg-red-900 border border-gray-500 rounded text-white transition placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-blue-500 " />
                    </div>
                    <div className="relative">
                        <input type="email" id="email" name="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="example@gmail.com" className="w-full bg-red-900 border border-gray-500 rounded  text-white transition placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-blue-500 " />
                    </div>
                    <div className="relative">
                        <textarea id="message" name="message" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Your message" rows="5" className="w-full bg-red-900 border border-gray-500 rounded  text-white transition placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-blue-500 " ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-red-900 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Send Message
                    </button>
                </form>


                </h2>

            

            </div>



        </section>
    );
}

export default Contact;