
//import logo from '../assets/logo.png'
export default function Navbar(){
    return(
        <header>
            
            <nav class="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md dark:bg-[#131313]/70 no-border bg-surface-container-low/50 shadow-none">
                <div class="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
                <a href="#home"><span class="text-xl font-bold tracking-tighter text-[#E5E2E1] font-manrope">  FortuneBarber</span></a>
                <div class="hidden md:flex items-center space-x-8">
                <a class="font-manrope text-sm tracking-widest  text-[#4A8EFF] border-b-2 border-[#4A8EFF] pb-1" href="#">Home</a>
                <a class="font-manrope text-sm tracking-widest  text-[#E5E2E1] hover:text-[#ADC7FF] transition-colors" href="#service">Services</a>
                <a class="font-manrope text-sm tracking-widest  text-[#E5E2E1] hover:text-[#ADC7FF] transition-colors" href="#gallery">Gallery</a>
                <a class="font-manrope text-sm tracking-widest  text-[#E5E2E1] hover:text-[#ADC7FF] transition-colors" href="#contact">Contact</a>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-manrope text-sm font-bold tracking-widest uppercase hover:bg-blue-500 hover:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                                Book Now
                            </button>
                </div>
                </nav>
        </header>
    )
}