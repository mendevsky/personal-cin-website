const NavBar = [
  { name: 'Home', href: '#home', current: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function NavigationBar() {
    
    return (
        <div className="fixed top-0 left-0 right-0 bg-red-900 p-4 flex justify-center items-center z-50">
            <div className="absolute left-4">
                <a href="#home">
                <img src="src\assets\iasLogo.svg" alt="Logo Ias" className="h-6 w-auto" />
                </a>
            </div>

            <div className="flex space-x-4">
                {NavBar.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={`px-3 py-2 rounded-md text-sm font-medium ${
                            item.current
                                ? 'bg-red-800 text-white'
                                : 'text-gray-300 hover:bg-red-700 hover:text-white'
                        }`}
                    >
                        {item.name}
                    </a>
                    
                ))}

            </div>

            <div className="absolute right-4">
                <a href="https://portal.cin.ufpe.br/" target="_blank" rel="noopener noreferrer">
                <img src="src\assets\CInLogo.svg" alt="Logo CIn" className="h-10 w-auto" />
                </a>
            </div>
        
        </div>
    )
}

export default NavigationBar;