import { useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Images } from "lucide-react";

import smartfarmHome from "@assets/WhatsApp_Image_2026-06-23_at_6.43.10_PM_1782220899023.jpeg";
import smartfarmCrops from "@assets/WhatsApp_Image_2026-06-23_at_6.43.09_PM_1782220908547.jpeg";
import smartfarmLogin from "@assets/WhatsApp_Image_2026-06-23_at_6.43.06_PM_1782220915705.jpeg";

const SMARTFARM_SCREENSHOTS = [
  { src: smartfarmHome, caption: "Home Screen — Multi-language support (English, हिंदी, తెలుగు, ಕನ್ನಡ)" },
  { src: smartfarmLogin, caption: "Farmer Login / Signup — Secure authentication" },
  { src: smartfarmCrops, caption: "Crop Marketplace — Direct farmer-to-consumer listings" },
];

const SMARTFARM_FEATURES = [
  "Multi-language support",
  "Farmer login",
  "Crop marketplace",
  "Voice assistant",
  "Direct farmer-to-consumer",
];

function SmartFarmCard({ index }: { index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const [showScreenshots, setShowScreenshots] = useState(false);
  const [screenshotIndex, setScreenshotIndex] = useState(0);

  const prev = () => setScreenshotIndex((i) => (i - 1 + SMARTFARM_SCREENSHOTS.length) % SMARTFARM_SCREENSHOTS.length);
  const next = () => setScreenshotIndex((i) => (i + 1) % SMARTFARM_SCREENSHOTS.length);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        style={{ perspective: 1000 }}
      >
        <motion.div
          ref={cardRef}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={(e) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            x.set(e.clientX - (rect.left + rect.width / 2));
            y.set(e.clientY - (rect.top + rect.height / 2));
          }}
          onMouseLeave={() => { x.set(0); y.set(0); }}
          className="glassmorphism rounded-xl p-8 h-full flex flex-col group hover:border-primary/40 transition-colors duration-500"
        >
          {/* Header row: thumbnail + title/badge */}
          <div className="flex gap-5 mb-5" style={{ transform: "translateZ(30px)" }}>
            {/* Small phone thumbnail */}
            <div className="flex-shrink-0 w-14 h-20 rounded-lg overflow-hidden border border-primary/20 group-hover:border-primary/40 transition-colors shadow-md">
              <img
                src={smartfarmHome}
                alt="SmartFarm app"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Title + badge */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors leading-tight">
                  SmartFarm
                </h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                  🏆 SIH 2025
                </span>
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                Direct Market Access for Farmers
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed text-sm mb-5 flex-grow" style={{ transform: "translateZ(20px)" }}>
            Android prototype connecting farmers directly with consumers — no middlemen. Built for SIH 2025, focused on rural accessibility and digital inclusion.
          </p>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {SMARTFARM_FEATURES.map((f) => (
              <span key={f} className="text-xs text-muted-foreground bg-background/50 border border-border/30 rounded-full px-2.5 py-0.5">
                {f}
              </span>
            ))}
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["Android Studio", "AI", "Multi-language", "UX Design"].map((tag) => (
              <span key={tag} className="text-xs uppercase tracking-wider text-muted-foreground bg-background/50 px-2 py-1 rounded border border-border/30">
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-border/20 flex flex-wrap items-center gap-3 mt-auto" style={{ transform: "translateZ(40px)" }}>
            <button
              onClick={() => { setScreenshotIndex(0); setShowScreenshots(true); }}
              data-testid="smartfarm-screenshots"
              className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Images size={14} /> View Screenshots
            </button>
            <span className="text-border/50">·</span>
            <a
              href="https://drive.google.com/file/d/1A__ef6i20Tc7JCsCaLdd9GoC61eL947o/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="smartfarm-demo"
              className="flex items-center gap-1.5 text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              <Play size={14} /> Watch Demo
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Screenshots Modal */}
      <AnimatePresence>
        {showScreenshots && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
            onClick={() => setShowScreenshots(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-xs w-full glassmorphism rounded-2xl overflow-hidden border border-primary/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-border/30 bg-card/50">
                <span className="font-serif text-sm text-foreground">SmartFarm — Screenshots</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">{screenshotIndex + 1}/{SMARTFARM_SCREENSHOTS.length}</span>
                  <button onClick={() => setShowScreenshots(false)} className="text-muted-foreground hover:text-primary transition-colors" data-testid="screenshots-close">
                    <X size={16} />
                  </button>
                </div>
              </div>
              <div className="relative bg-black">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={screenshotIndex}
                    src={SMARTFARM_SCREENSHOTS[screenshotIndex].src}
                    alt={SMARTFARM_SCREENSHOTS[screenshotIndex].caption}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="w-full object-contain max-h-[55vh]"
                  />
                </AnimatePresence>
                <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 hover:bg-primary/20 text-white hover:text-primary transition-all" data-testid="screenshot-prev">
                  <ChevronLeft size={18} />
                </button>
                <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 hover:bg-primary/20 text-white hover:text-primary transition-all" data-testid="screenshot-next">
                  <ChevronRight size={18} />
                </button>
              </div>
              <div className="px-5 py-3 bg-card/30">
                <p className="text-xs text-muted-foreground text-center mb-2">{SMARTFARM_SCREENSHOTS[screenshotIndex].caption}</p>
                <div className="flex justify-center gap-1.5">
                  {SMARTFARM_SCREENSHOTS.map((_, i) => (
                    <button key={i} onClick={() => setScreenshotIndex(i)} className={`h-1.5 rounded-full transition-all ${i === screenshotIndex ? "bg-primary w-4" : "bg-border/50 w-1.5 hover:bg-primary/40"}`} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}

interface ProjectProps {
  title: string;
  tags: string[];
  description: string;
  badge?: string;
  index: number;
}

function ProjectCard({ title, tags, description, badge, index }: ProjectProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={(e) => {
          if (!cardRef.current) return;
          const rect = cardRef.current.getBoundingClientRect();
          x.set(e.clientX - (rect.left + rect.width / 2));
          y.set(e.clientY - (rect.top + rect.height / 2));
        }}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        className="glassmorphism rounded-xl p-8 h-full flex flex-col group hover:border-primary/40 transition-colors duration-500"
      >
        <div className="flex justify-between items-start mb-6" style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">{title}</h3>
          {badge && (
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap ml-4">
              {badge}
            </span>
          )}
        </div>
        <p className="text-muted-foreground mb-8 flex-grow leading-relaxed" style={{ transform: "translateZ(20px)" }}>
          {description}
        </p>
        <div className="flex flex-col gap-6 mt-auto" style={{ transform: "translateZ(40px)" }}>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs uppercase tracking-wider text-muted-foreground bg-background/50 px-2 py-1 rounded border border-border/30">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const projects = [
  {
    title: "YouTube Clone",
    tags: ["React", "CSS", "JavaScript"],
    description: "Responsive YouTube clone with modern UI and clean user experience."
  },
  {
    title: "CertiChain",
    tags: ["Blockchain", "Smart Contracts", "Web3", "Solidity"],
    description: "Blockchain-based certificate verification platform using decentralized technologies. Features: Certificate verification, tamper-proof records, blockchain integration, and secure validation.",
    badge: "⚡ Blockchain"
  },
  {
    title: "Student Success Prediction",
    tags: ["Python", "Scikit-learn", "ML"],
    description: "Machine learning model predicting student performance using educational datasets and classification algorithms."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 relative inline-block">
            Featured Projects
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SmartFarmCard index={0} />
          {projects.map((project, index) => (
            <ProjectCard key={project.title} index={index + 1} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
