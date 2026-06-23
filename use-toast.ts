import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";
import resumeUrl from "@assets/CHITTEPU_LAVANYA_RESUME_1781875689716.pdf?url";
import profilePhoto from "@assets/23TP1A0526_1782130053505.png";

const ROLES = [
  "Full Stack Developer",
  "Blockchain Enthusiast",
  "Problem Solver"
];

const SUBTITLES = [
  "Building Modern Web Applications",
  "Exploring Blockchain Solutions",
  "Creating User-Focused Experiences"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  // Avatar 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  useEffect(() => {
    const subtitleInterval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % SUBTITLES.length);
    }, 4500);
    return () => clearInterval(subtitleInterval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen relative flex items-center pt-20 overflow-hidden"
    >
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground mb-4 tracking-wider leading-tight">
                Lavanya <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Reddy</span>
              </h1>
            </motion.div>

            <div className="h-12 md:h-16 mb-2 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={roleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-foreground/90 absolute w-full lg:w-auto"
                >
                  {ROLES[roleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>

            <div className="h-8 mb-8 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.p
                  key={subtitleIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-muted-foreground text-sm md:text-base tracking-widest uppercase absolute w-full lg:w-auto"
                >
                  {SUBTITLES[subtitleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="max-w-xl mx-auto lg:mx-0 text-muted-foreground/80 mb-12 text-lg leading-relaxed"
            >
              Computer Science undergraduate passionate about crafting elegant digital experiences
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <MagneticButton 
                as="a" 
                href={resumeUrl} 
                download="Lavanya_Reddy_Resume.pdf"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-sm font-medium tracking-wide text-sm border border-primary"
              >
                Download Resume
              </MagneticButton>
              <MagneticButton 
                onClick={() => scrollTo("#projects")}
                className="bg-transparent hover:bg-primary/10 text-primary px-8 py-4 rounded-sm font-medium tracking-wide text-sm border border-primary/50 backdrop-blur-sm"
              >
                View Projects
              </MagneticButton>
              <MagneticButton 
                onClick={() => scrollTo("#contact")}
                className="text-foreground/70 hover:text-foreground px-4 py-4 font-medium tracking-wide text-sm"
              >
                Contact Me
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full relative group cursor-pointer"
            >
              <div className="absolute inset-0 rounded-full border border-primary/30 group-hover:border-primary/60 transition-colors duration-500 overflow-hidden shadow-[0_0_40px_rgba(201,168,76,0.15)] group-hover:shadow-[0_0_60px_rgba(201,168,76,0.3)]">
                <img
                  src={profilePhoto}
                  alt="Lavanya Reddy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              </div>
              <div className="absolute -inset-4 rounded-full border-[0.5px] border-primary/10 group-hover:border-primary/30 group-hover:rotate-180 transition-all duration-[3s] ease-linear" />
              <div className="absolute -inset-8 rounded-full border-[0.5px] border-primary/5 group-hover:border-primary/20 group-hover:-rotate-90 transition-all duration-[4s] ease-linear" />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: ["0%", "-50%", "0%"],
            x: ["0%", i % 2 === 0 ? "20%" : "-20%", "0%"],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
          style={{
            left: `${15 + i * 30}%`,
            top: `${70 - i * 20}%`
          }}
        />
      ))}
    </section>
  );
}
