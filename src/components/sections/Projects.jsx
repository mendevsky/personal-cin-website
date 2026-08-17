function Projects() {
    return (
        <section className="min-h-screen flex justify-center items-center py-20" id="projects">

            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-center"> 
                    My Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-gray-200 shadow-md hover:translate-y-1 hover:border-red-500 hover:shadow-[0_2px_08px_rgba(255,0,0,0.3)] transition-all">
                        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent">
                            Abacaxiland - Introdução a Programação
                        </h3>
                        <p className="text-gray-700 mb-4">
                        Final project of the Introduction to Programming course at the CIn-UFPE, in which a fruit collection game was created using Python and Pygame.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "Pygame", "GitHub"].map((tech, key) => (
                                <span key={key} className="bg-red-900 text-white px-3 py-1 rounded-full text-sm hover:bg-red-700 transition-colors duration-300 mr-2 mb-2 inline-block">
                                {tech}
                            </span>))}
                        </div>
                        <div>
                            <a href="https://github.com/rubdelima/abacaxiland.git" className="text-red-900 hover:text-red-700 hover:underline font-bold justify-center items-center flex mt-4 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-gray-200 shadow-md hover:translate-y-1 hover:border-red-500 hover:shadow-[0_2px_08px_rgba(255,0,0,0.3)] transition-all">
                        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent">
                            Personal CIn Website
                        </h3>
                        <p className="text-gray-700 mb-4">
                        Project of the Software Development course at CIn-UFPE, in which a personal website was created using React, TailwindCSS and Vite.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "TailwindCSS", "Vite", "JavaScript", "HTML", "CSS", "GitHub"].map((tech, key) => (
                                <span key={key} className="bg-red-900 text-white px-3 py-1 rounded-full text-sm hover:bg-red-700 transition-colors duration-300 mr-2 mb-2 inline-block">
                                {tech}
                            </span>))}
                        </div>
                        <div>
                            <a href="https://github.com/mendevsky/personal-cin-website.git" className="text-red-900 hover:text-red-700 hover:underline font-bold justify-center items-center flex mt-4 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        </div>
                    </div>


                </div>





            </div>
            



        </section>
    );
}

export default Projects;