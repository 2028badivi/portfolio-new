'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FallingPattern } from "@/components/ui/falling-pattern";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton, MetalButton } from '@/components/ui/liquid-glass-button';
import { ButtonColorful } from '@/components/ui/button-colorful';
import { GooeyText } from '@/components/ui/gooey-text-morphing';
import { HeroWithMarquee } from '@/components/ui/cta-with-marquee';
import { HeroDeviceDemo } from '@/components/ui/hero-device-demo';
import { IntroScreen } from '@/components/intro-screen';
import { resumeData } from '@/lib/data';
import { 
  GraduationCap, 
  Briefcase, 
  Code, 
  Award, 
  ChevronDown, 
  MapPin,
  Calendar,
  CheckCircle2,
  Atom,
  Cpu,
  Microscope,
  Binary,
  Dna
} from 'lucide-react';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="bg-black min-h-screen" />;

  return (
    <main className="bg-black text-white min-h-screen selection:bg-primary selection:text-white">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroScreen key="intro-screen" onComplete={() => setShowIntro(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            {/* HERO SECTION */}
            <section className="relative h-[90vh] flex flex-col items-center justify-center overflow-hidden w-full">
              <HeroDeviceDemo />
            </section>

            {/* MARQUEE SECTION */}
            <HeroWithMarquee />

            {/* SUMMARY / ABOUT */}
            <section id="about" className="py-32 px-4 max-w-6xl mx-auto relative z-10">
               <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
                 <div className="md:col-span-4 sticky top-32">
                    <div className="space-y-6">
                      <h2 className="text-4xl font-bold tracking-tighter flex items-center gap-3">
                         <Microscope className="text-primary" />
                         Philosophy
                      </h2>
                      <div className="h-1 w-20 bg-primary/20 rounded-full" />
                      <p className="text-white/40 font-mono text-xs leading-relaxed uppercase tracking-[0.3em]">
                        Human-Centric <br />Engineering Research
                      </p>
                    </div>
                 </div>
                 <div className="md:col-span-8">
                    <p className="text-2xl md:text-4xl text-white/90 leading-tight font-medium tracking-tight">
                      "{resumeData.summary}"
                    </p>
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { icon: Cpu, label: "AI & ML" },
                        { icon: Binary, label: "CS+Data" },
                        { icon: Atom, label: "Quantum" },
                        { icon: Microscope, label: "Biotech" }
                      ].map((item, i) => (
                        <div key={i} className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col items-center gap-3">
                          <item.icon className="text-white/30" size={24} />
                          <span className="text-[10px] items-center text-center uppercase tracking-widest text-white/40">{item.label}</span>
                        </div>
                      ))}
                    </div>
                 </div>
               </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="py-32 px-4 bg-white/[0.01] border-y border-white/5 relative z-10">
               <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                  <div>
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 flex items-center gap-6">
                      <Code className="text-primary/40 size-12 md:size-20" />
                      RESEARCH
                    </h2>
                    <p className="text-white/40 text-xl font-mono uppercase tracking-widest">Selected portfolio and academic pursuits。</p>
                  </div>
                  <ButtonColorful label="All GitHub" variant="sm" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {resumeData.projects.map((project, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -10 }}
                      className="group relative border border-white/10 bg-zinc-900/50 p-8 rounded-[2.5rem] overflow-hidden hover:bg-zinc-800/50 transition-all duration-500"
                    >
                      <div className="absolute -right-12 -bottom-12 size-48 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="flex justify-between items-start mb-12">
                        <div className="size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                          {idx % 2 === 0 ? <Dna size={28} /> : <Cpu size={28} />}
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] bg-white/5 px-4 py-2 rounded-full text-white/40 border border-white/5">
                          {project.date}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-white/30 text-xs mb-8 flex items-center gap-2 font-mono uppercase tracking-widest italic">
                        <MapPin size={12} /> {project.location}
                      </p>
                      
                      <p className="text-primary/90 text-sm font-bold mb-6 tracking-wide underline decoration-primary/20 underline-offset-4">{project.role}</p>
                      
                      <ul className="space-y-4">
                        {project.points.map((point, pIdx) => (
                          <li key={pIdx} className="text-white/50 text-xs md:text-sm leading-relaxed flex gap-3">
                            <Binary className="size-4 shrink-0 mt-0.5 text-white/20" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
               </div>
            </section>

            {/* SKILLS CARDS */}
            <section className="py-32 px-4 relative z-10 overflow-hidden">
               <div className="max-w-7xl mx-auto">
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Education */}
                    <div className="lg:col-span-1 space-y-12">
                      <h2 className="text-4xl font-black tracking-tighter flex items-center gap-4 border-l-8 border-primary pl-8">
                        ED
                        <span className="text-white/20">/01</span>
                      </h2>
                      <div className="p-10 rounded-[3rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-black relative group">
                        <GraduationCap className="absolute -right-6 -bottom-6 text-white/5 size-40 rotate-[-15deg] group-hover:rotate-0 transition-transform duration-1000" />
                        <h3 className="text-3xl font-bold mb-4">{resumeData.education.school}</h3>
                        <div className="space-y-6 relative z-10">
                          <div className="flex gap-4">
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex-1">
                              <span className="text-[10px] uppercase font-mono text-white/30 block mb-1 tracking-widest">GPA</span>
                              <span className="text-2xl font-bold italic">{resumeData.education.gpa}</span>
                            </div>
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex-1">
                              <span className="text-[10px] uppercase font-mono text-white/30 block mb-1 tracking-widest">Year</span>
                              <span className="text-2xl font-bold italic">'28</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                             <span className="text-[10px] uppercase font-mono text-white/30 tracking-widest">Key Path</span>
                             <p className="text-white/60 text-sm leading-relaxed font-light">{resumeData.education.coursework}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Skill Tags */}
                    <div className="lg:col-span-2 space-y-12">
                      <h2 className="text-4xl font-black tracking-tighter flex items-center gap-4 border-l-8 border-primary pl-8">
                        SKILLS & HONORS
                        <span className="text-white/20">/02</span>
                      </h2>
                      <div className="flex flex-wrap gap-4">
                        {resumeData.skillsAndHonors.map((skill, idx) => (
                           <motion.div 
                             key={idx}
                             whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
                             className="px-8 py-5 border border-white/10 rounded-[2rem] bg-white/[0.03] flex items-center gap-4 group transition-colors"
                           >
                             <CheckCircle2 size={24} className="text-primary group-hover:animate-pulse" />
                             <p className="text-white/70 font-semibold tracking-tight">{skill}</p>
                           </motion.div>
                        ))}
                      </div>
                    </div>
                 </div>
               </div>
            </section>

            {/* FOOTER */}
            <footer className="py-40 px-4 border-t border-white/10 bg-zinc-950">
               <div className="max-w-5xl mx-auto text-center space-y-16">
                 <div className="space-y-4">
                   <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic">Stay <span className="text-primary">Curious</span></h2>
                   <p className="text-white/30 font-mono text-sm tracking-[0.5em] uppercase">Built at the intersection of Bio + AI</p>
                 </div>
                 
                 <div className="flex flex-wrap justify-center gap-8">
                    <ButtonColorful label="Contact Me" className="h-16 px-12 text-xl" />
                    <MetalButton variant="primary" className="h-16 px-12">Resume.pdf</MetalButton>
                 </div>
                 
                 <div className="pt-24 flex flex-col items-center gap-8">
                   <div className="h-1 w-full max-w-xs bg-white/10 rounded-full overflow-hidden">
                     <motion.div 
                       animate={{ x: ["-100%", "100%"] }}
                       transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                       className="h-full w-1/3 bg-primary"
                     />
                   </div>
                   <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.6em]">
                     © 2026 BHAVESH • THOMAS JEFFERSON HSST
                   </p>
                 </div>
               </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
