
//import WhatsApp from "../components/WhatsApp"
import Nav from  "../components/Navbar"
import bgimg from '../assets/img2.jpg'
export default function Home (){
    return(
      <main>
        <section id="home">
          <Nav />
          <div>
            <section class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface">
                    <div class="absolute inset-0 z-0">
                    <div class="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10"></div>
                    <div class="w-full h-full bg-cover bg-fixed bg-right opacity-60 mix-blend-luminosity"
                    style={{ backgroundImage: `url(${bgimg})` }}></div>
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

                <section class="py-32 bg-surface" id="service">
                <div class="container mx-auto px-8">
                <div class="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                <span class="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 block">The Menu</span>
                <h2 class="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">Masterful Services</h2>
                </div>
                <p class="max-w-md text-on-surface-variant leading-relaxed">
                                        Every service is a ritual. We use only premium products and surgical-grade tools to ensure your absolute satisfaction.
                                    </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                <div class="group bg-surface-container-low p-8 rounded-xl transition-all duration-500 hover:bg-surface-container-high hover:-translate-y-2 border border-outline-variant/5">
                <div class="mb-8 overflow-hidden rounded-lg aspect-video">
                <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Detailed view of a professional barber performing a clean fade on a male client in a moody upscale barbershop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvW1aWLHUYDTMjE9b8g5cFrBZlrXe1I_yX4XgMultoDXkrxGJHDJbSW278yzj7pbAYCYPKEHvZ81OTtS_s6fNeXwu6vEDHrei2rFkQTVwriWkD9xu6s_0SVGWKmVnteyogHEYTTm9ddxQI3DiXmyxTHxTSJ4lbXfZqKxPY3E9tH5RxtqTzNZnYTuR_2-5LrDAC38GA5qFiAxgL7ERNi4WfEcQE5GtAaHF14BOWcdIx8Bj9tPBOenTFXN6855cxjnZh22V43s4G3Co"/>
                </div>
                <div class="flex justify-between items-start mb-4">
                <h4 class="font-headline text-2xl font-bold">The Signature Cut</h4>
                <span class="text-primary-container font-headline font-bold">$45</span>
                </div>
                <p class="text-on-surface-variant font-body mb-8 leading-relaxed">
                                            Precision fade or classic scissor cut, finished with a straight razor neck shave and styling.
                                        </p>
                <button class="w-full py-4 bg-surface-container-highest text-on-surface font-manrope font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all">
                                            Book Haircut
                                        </button>
                </div>

                <div class="group relative bg-surface-container-high p-8 rounded-xl transition-all duration-500 hover:bg-surface-bright hover:-translate-y-2 border-2 border-primary-container/30">

                <div class="mb-8 overflow-hidden rounded-lg aspect-video">
                <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Relaxing hot towel treatment on a man in a vintage barber chair with warm golden glow and steam" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRZfdOtdZOx6dC8vTPNBN5Z8_sdHOKg0lqprIGMWBjLBaUgdzyccE5nJvDyxMMIjzwSiMSqe9F2WUfQzCI0527wTZfvv4zfZ_Rl-9wXGW5JLdZCaqfJp4L1crRpgVl8X742fEksvDBTo0lvZDX50Wd8to71cMD9_ZTN3cKiyhWKmfyWK8VSfqsrud7fxnCJE1olu4MhNJ0YgMZtjjm422VyFsN8zzdslBVdPsRyiDaD7Qgo8pNihdfHyG9ba1JNBpNHnxOhLrXbVc"/>
                </div>
                <div class="flex justify-between items-start mb-4">
                <h4 class="font-headline text-2xl font-bold">The Full Ritual</h4>
                <span class="text-primary-container font-headline font-bold">$85</span>
                </div>
                <p class="text-on-surface-variant font-body mb-8 leading-relaxed">
                                            Signature cut plus beard sculpting, hot towel service, and a revitalizing charcoal facial mask.
                                        </p>
                <button class="w-full py-4 bg-primary-container text-on-primary-container font-manrope font-bold uppercase tracking-widest text-xs rounded-xl shadow-[0_4px_15px_rgba(74,142,255,0.2)] hover:scale-[1.02] transition-all">
                                            Book Experience
                                        </button>
                </div>

                <div class="group bg-surface-container-low p-8 rounded-xl transition-all duration-500 hover:bg-surface-container-high hover:-translate-y-2 border border-outline-variant/5">
                <div class="mb-8 overflow-hidden rounded-lg aspect-video">
                <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Close-up of a straight razor being used to line a thick beard with precision in a high-contrast dark environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ3KGUg_aMaEw5x1-HNdYmSow7jFr9FB877jOwyotvrMYZf7sjxmr0LWKQw5cS2ziAmxhWY8nDUA8vEiclsKE1tR7QOlLP8_6YIvF-PIKoPdxU428iFXNGR546TrzxcyHcHqO0ghoLXLeKRatgnWpYDZ43R6Ti-wgT6W59JwQzBn_5wvuiZdbaAKRIhz9aRvwvzK8lfpEBgA4hKuYcYq6Qflxy1tS7-5faE6pGE9sl4PlrnsJEjGoG53sxPNqulWRAXAa1l6IRYoI"/>
                </div>
                <div class="flex justify-between items-start mb-4">
                <h4 class="font-headline text-2xl font-bold">Beard Sculpt</h4>
                <span class="text-primary-container font-headline font-bold">$35</span>
                </div>
                <p class="text-on-surface-variant font-body mb-8 leading-relaxed">
                                            Expert shaping and lining using straight razors and premium beard oils for a sharp, clean finish.
                                        </p>
                <button class="w-full py-4 bg-surface-container-highest text-on-surface font-manrope font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all">
                                            Book Sculpt
                                        </button>
                </div>
                </div>
                </div>
                </section>
      </main>
    )
}