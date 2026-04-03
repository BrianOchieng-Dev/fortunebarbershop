
//import WhatsApp from "../components/WhatsApp"
import Nav from  "../components/Navbar"
import bgimg from '../assets/img2.jpg'
import beard from '../assets/img8.jpg'
import cut from '../assets/img9.jpg'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Scissors } from 'lucide-react'

export default function Home (){
    return(
      <main>
        <section id="home">
          <Nav />
          <div>
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface">
                    <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10"></div>
                    <div className="w-full h-full bg-cover bg-fixed bg-right opacity-60 mix-blend-luminosity"
                    style={{ backgroundImage: `url(${bgimg})` }}></div>
                    </div>
                    <div className="container mx-auto px-8 relative z-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-block px-4 py-1 mb-6 rounded-full bg-surface-container-high text-blue-600 font-label text-xs font-bold tracking-[0.2em] uppercase">
                        Master Groomer in Town</motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-6 leading-tight">
                                            Precision Cuts for Men Who <span className="text-blue-600">Demand Excellence</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="font-body text-xl text-on-surface-variant mb-10 max-w-xl leading-relaxed">
                                            Experience elite grooming in a sanctuary of cinematic style. Our master barbers blend traditional craft with modern precision.
                                        </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-manrope font-bold uppercase tracking-widest hover:bg-blue-500 hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                                Book Appointment
                                            </button>
                    <button className="bg-surface-container-highest text-on-surface px-10 py-4 rounded-xl font-manrope font-bold uppercase tracking-widest border border-outline-variant/15 hover:bg-surface-bright transition-all">
                                                View Services
                                            </button>
                    </motion.div>
                    </motion.div>
                    </div>
            </section>
          </div>
        </section>
            <section>
<section className="bg-surface-container-lowest py-12 relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container via-transparent to-transparent"></div>
<div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
<div className="flex items-center gap-6">
<div className="h-16 w-16 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
<Scissors className="w-8 h-8" strokeWidth={2.5} />
</div>
<div>
<h3 className="font-headline text-2xl font-bold text-on-surface">First Visit Special</h3>
<p className="font-body text-on-surface-variant">Elevate your style with a premium welcome.</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-right hidden sm:block">
<span className="block font-label text-xs uppercase tracking-widest text-tertiary">Limited Time Offer</span>
<span className="text-3xl font-headline font-extrabold text-primary-container">20% OFF</span>
</div>
<button className="bg-primary-container text-on-primary-container px-8 py-3 rounded-xl font-manrope font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform">
                        Claim Now
                    </button>
</div>
</div>
</section>

                <section className="py-32 bg-surface" id="service">
                <div className="container mx-auto px-8">
                <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 block">The Menu</span>
                <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface text-blue-600">Masterful Services</h2>
                </div>
                <p className="max-w-md text-on-surface-variant leading-relaxed">
                                        Every service is a ritual. We use only premium products and surgical-grade tools to ensure your absolute satisfaction.
                                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                <div className="group bg-surface-container-low p-8 rounded-xl transition-all duration-500 hover:bg-surface-container-high hover:-translate-y-2 border border-outline-variant/5">
                <div className="mb-8 overflow-hidden rounded-lg aspect-video">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                data-alt="Detailed view of a professional barber performing a clean fade on a male client in a moody upscale barbershop" 
                src={cut}/>
                </div>
                <div className="flex justify-between items-start mb-4">
                <h4 className="font-headline text-2xl font-bold">The Signature Cut</h4>
                <span className="text-primary-container font-headline font-bold">$45</span>
                </div>
                <p className="text-on-surface-variant font-body mb-8 leading-relaxed">
                                            Precision fade or classic scissor cut, finished with a straight razor neck shave and styling.
                                        </p>
                <button className="w-full py-4 bg-surface-container-highest text-on-surface font-manrope font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all">Book Haircut</button>
                </div>
                <div className="group relative bg-surface-container-high p-8 rounded-xl transition-all duration-500 hover:bg-surface-bright hover:-translate-y-2 border-2 border-primary-container/30">

                <div className="mb-8 overflow-hidden rounded-lg aspect-video">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Relaxing hot towel treatment on a man in a vintage barber chair with warm golden glow and steam" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRZfdOtdZOx6dC8vTPNBN5Z8_sdHOKg0lqprIGMWBjLBaUgdzyccE5nJvDyxMMIjzwSiMSqe9F2WUfQzCI0527wTZfvv4zfZ_Rl-9wXGW5JLdZCaqfJp4L1crRpgVl8X742fEksvDBTo0lvZDX50Wd8to71cMD9_ZTN3cKiyhWKmfyWK8VSfqsrud7fxnCJE1olu4MhNJ0YgMZtjjm422VyFsN8zzdslBVdPsRyiDaD7Qgo8pNihdfHyG9ba1JNBpNHnxOhLrXbVc"/>
                </div>
                <div className="flex justify-between items-start mb-4">
                <h4 className="font-headline text-2xl font-bold">The Full Ritual</h4>
                <span className="text-primary-container font-headline font-bold">$85</span>
                </div>
                <p className="text-on-surface-variant font-body mb-8 leading-relaxed">
                Signature cut plus beard sculpting, hot towel service, and a revitalizing charcoal facial mask.
                </p>
                <button className="w-full py-4 bg-primary-container text-on-primary-container font-manrope font-bold uppercase tracking-widest text-xs rounded-xl shadow-[0_4px_15px_rgba(74,142,255,0.2)] hover:scale-[1.02] transition-all">
                Book Experience
                </button>
                </div>

                <div className="group bg-surface-container-low p-8 rounded-xl transition-all duration-500 hover:bg-surface-container-high hover:-translate-y-2 border border-outline-variant/5">
                <div className="mb-8 overflow-hidden rounded-lg aspect-video">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                data-alt="Close-up of a straight razor being used to line a thick beard with precision in a high-contrast dark environment"
                 src={beard} />
                </div>
                <div className="flex justify-between items-start mb-4">
                <h4 className="font-headline text-2xl font-bold">Beard Sculpt</h4>
                <span className="text-primary-container font-headline font-bold">$35</span>
                </div>
                <p className="text-on-surface-variant font-body mb-8 leading-relaxed">
                                            Expert shaping and lining using straight razors and premium beard oils for a sharp, clean finish.
                                        </p>
                <button className="w-full py-4 bg-surface-container-highest text-on-surface font-manrope font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all">
                                            Book Sculpt
                                        </button>
                </div>
                </div>
                </div>
                </section>
            </section>
           
      </main>
    )
}
