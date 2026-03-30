
//import WhatsApp from "../components/WhatsApp"
import Nav from  "../components/Navbar"
import bgimg from '../assets/bgg.jpeg'
export default function Home (){
    return(
      <main>
        <section id="home">
          <Nav />
          <div>
            <section class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface">
                    <div class="absolute inset-0 z-0">
                    <div class="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10"></div>
                    <img class="w-full h-full object-cover object-right opacity-60 mix-blend-luminosity " 
                    data-alt="Close-up of a high-end matte black professional shaving machine on a dark marble surface with dramatic side studio lighting" 
                    src={bgimg}/>
                    </div>
                    <div class="container mx-auto px-8 relative z-20">
                    <div class="max-w-3xl">
                    <span class="inline-block px-4 py-1 mb-6 rounded-full bg-surface-container-high text-blue-600 font-label text-xs font-bold tracking-[0.2em] uppercase">
                        Master Groomer in Town</span>
                    <h1 class="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-6 leading-tight">
                                            Precision Cuts for Men Who <span class="text-blue-600">Demand Excellence</span>
                    </h1>
                    <p class="font-body text-xl text-on-surface-variant mb-10 max-w-xl leading-relaxed">
                                            Experience elite grooming in a sanctuary of cinematic style. Our master barbers blend traditional craft with modern precision.
                                        </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                    <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-manrope font-bold uppercase tracking-widest hover:bg-blue-500 hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                                Book Appointment
                                            </button>
                    <button class="bg-surface-container-highest text-on-surface px-10 py-4 rounded-xl font-manrope font-bold uppercase tracking-widest border border-outline-variant/15 hover:bg-surface-bright transition-all">
                                                View Services
                                            </button>
                    </div>
                    </div>
                    </div>
            </section>
          </div>
        </section>
      </main>
    )
}