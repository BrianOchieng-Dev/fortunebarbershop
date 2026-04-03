
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

                                <section className="py-32 bg-surface-container-lowest" id="gallery">
                    <div className="container mx-auto px-8">
                    <div className="text-center mb-16">
                    <span className="font-label text-xs uppercase tracking-[0.3em] text-tertiary mb-4 block">Visual Authority</span>
                    <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">The Craftsmanship</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
                    <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-xl relative group">
                    <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    data-alt="Portrait of a modern man with a sharp fade and groomed beard in a cinematic studio setting" 
                    src={beard}/>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="font-manrope font-bold uppercase tracking-widest text-sm">Signature Mid-Fade</p>
                    </div>
                    </div>
                    <div className="md:col-span-2 overflow-hidden rounded-xl relative group">
                    <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="Barber tools arranged on a leather mat with soft spotlighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdWJuxKgqrpaw8tNGljSxT3lBYh2yOVFKc9Hx1EubXc5iUJXzq4YO0KqAU3ZRYEv0LL4ow8SQeOH0ZU9OWwwT9PTFHZEeynOMJ_2JAwdOLjPzgtpfXYYfTqwC6DProF7pbKHGFzzAswshJ97mlBQWoAfNxzwoEqXY7feuMgwEIZHJOwaBddkYLP8Noe2HT81HA3JZxQ98n74SM2bWllucWVPyuRwCTpjM0jAoyXj0fmiTDDBX0PSZ8mugi0jFyh-hgbUL0E5YhhUg"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="font-manrope font-bold uppercase tracking-widest text-sm">Professional Grade Tools</p>
                    </div>
                    </div>
                    <div className="overflow-hidden rounded-xl relative group">
                    <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="Detail shot of a hair clipper cutting through hair with extreme precision" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL8XL4yhHJZCGJKPgXRbKAlXG_wyNp6GmSwx4_xUgluTGPIQQdR_Wf7qktSGmZ5k6C2CyE_SebruTf8XAdb2OhOzLU18PVT0dgsnbBRrYnjooGtQKR6VhTihytxEjQ0J4xlc9BdascKU4BsQumVDaeBmyaM2mDwWcSr1FcNl3xo6dEMSBSsxnxB_J4feJ3O161_REOtJ04LXvRfhBKEwPkiiAmxsXcwXNNwZ4rU9p-q_NH_aeSKNUT7IoNTIB7E89qAo8mrPbW8sE"/>
                    </div>
                    <div className="overflow-hidden rounded-xl relative group">
                    <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="Classic gentleman styling his hair in front of a mirror in a luxurious setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2JOCjUQ90ERJEHKTjs_GYRt7_0V2GAH4iEJ2-mbfXvM3ogmkVR9qdcQ8vsQHU6Z5iBUU3AC0Q3sfHmAeQ9Qt50_Nc0b5q7k4_lAJipOd2g4tmko1No_vam5d3C0cM6o4aHjqiW_96jrwu9gGIhWMWtY_j4MkPkc0D10age09Xqfk9UnkaHyfVxDuc9LTLsz_jgY9mIhTQ9UstOFfqUOBWEf2E51hwoNkK3J6lD403Ui1iJ5pCL1NaRWie_IkS5ynGuYvEUs_-Jeo"/>
                    </div>
                    </div>
                    </div>
                    </section>


                    <section className="py-32 bg-surface">
<div className="container mx-auto px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div>
<h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-8">Demanded by the <span className="text-primary">Discerning Few</span></h2>
<div className="grid grid-cols-2 gap-8 mb-12">
<div>
<span className="block text-4xl font-headline font-extrabold text-primary-container">500+</span>
<span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Satisfied Clients</span>
</div>
<div>
<span className="block text-4xl font-headline font-extrabold text-primary-container">4.9/5</span>
<span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Average Rating</span>
</div>
</div>
<div className="space-y-8">
<div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
<div className="flex gap-1 text-tertiary mb-4">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-body italic text-on-surface mb-4">"The atmosphere is incredible. It's not just a haircut, it's a 45-minute retreat from the world. Best fade I've ever had."</p>
<span className="font-label text-xs font-bold uppercase tracking-widest text-primary">— Marcus V.</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-full bg-gradient-to-tr from-primary-container/20 to-transparent absolute -inset-10 blur-3xl"></div>
<img className="relative z-10 rounded-xl grayscale shadow-2xl" data-alt="Interior of the barbershop showing premium leather chairs and architectural lighting in a dark luxury style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqvG39AiLGMYPcNbQlNWsGbf8LZIR7-E3KvhnWEPnW3VplYpZZ9xCVH7k54paMakK7ql1W4GdR8y7h3eJxtPoNfKJVkh1Ejm_l5RTH_eFHVCyJr25kfvX24NLKi6Zvyv0JKa-t19KcU88UBaNZzY8MQ9hm04mrAVNdZkqm4112t5NWCRqp2M_gEYYl25tXAOgtkvJ-ltIVYZTZSfxHnufRYolpdTaRdYNzZsM3AMUajojmypAR4KmLKcqTzS1IufXKL9Pl59sW418"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface-container-low" id="contact">
<div className="container mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="md:col-span-2 h-[400px] rounded-xl overflow-hidden grayscale border border-outline-variant/20">
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31918.12374639145!2d34.7635712!3d0.29491199999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1775212689782!5m2!1sen!2ske" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
</div>
<div className="space-y-8 flex flex-col justify-center">
<div>
<span className="font-label text-xs uppercase tracking-widest text-primary mb-2 block">Find Us</span>
<h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">The Downtown Studio</h3>
<p className="text-on-surface-variant font-body">124 Lexinton Ave, New York, NY 10016</p>
</div>
<div>
<span className="font-label text-xs uppercase tracking-widest text-primary mb-2 block">Hours</span>
<ul className="text-on-surface-variant space-y-1 font-body">
<li className="flex justify-between"><span>Mon - Fri</span> <span>10:00 — 20:00</span></li>
<li className="flex justify-between"><span>Sat</span> <span>09:00 — 18:00</span></li>
<li className="flex justify-between"><span>Sun</span> <span className="text-tertiary">Closed</span></li>
</ul>
</div>
<div className="pt-4 space-y-4">
<button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-surface-container-highest border border-outline-variant/10 text-on-surface hover:bg-surface-bright transition-all">
<span className="material-symbols-outlined text-sm">call</span>
<span className="font-manrope font-bold uppercase tracking-widest text-xs">Call Us</span>
</button>
<button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 transition-all">
<span className="material-symbols-outlined text-sm">chat</span>
<span className="font-manrope font-bold uppercase tracking-widest text-xs">WhatsApp</span>
</button>
</div>
</div>
</div>
</div>
</section>
           
      </main>
    )
}
