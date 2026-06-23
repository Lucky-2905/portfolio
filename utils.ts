import { motion } from "framer-motion";

const timelineItems = [
  {
    title: "Blockchain Internship",
    organization: "Arthachain",
    date: "July 2025 – Oct 2025",
    description: "Completed guided blockchain tasks, built mini-project CertiChain."
  },
  {
    title: "Smart India Hackathon 2025",
    organization: "Participant",
    date: "2025",
    description: "Problem SIH1637 — Agriculture & Rural Development track."
  },
  {
    title: "Idea Presentation Certificate",
    organization: "Academic Achievement",
    date: "Recent",
    description: "Academic achievement for innovative idea presentation."
  },
  {
    title: "Ideathon — SHINORA-26",
    organization: "Teegala Krishna Reddy Engineering College",
    date: "March 2026",
    description: "Certificate of Participation for Idea Presentation event at the 2-Day National Level Tech Fest."
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-card/10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 relative inline-block">
            Achievements & Certifications
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
          </h2>
        </motion.div>

        <div className="relative border-l border-primary/20 ml-4 md:mx-auto md:border-l-0">
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary/20 -translate-x-1/2" />
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex md:justify-between items-center w-full ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-[11px] h-[11px] rounded-full bg-primary shadow-[0_0_10px_rgba(201,168,76,0.5)] z-10" />
                  
                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block w-[45%]" />
                  
                  {/* Content card */}
                  <div className="w-full pl-8 md:pl-0 md:w-[45%]">
                    <div className="glassmorphism p-6 rounded-lg hover:border-primary/30 transition-colors">
                      <span className="text-xs font-mono text-primary mb-2 block">{item.date}</span>
                      <h3 className="text-xl font-serif text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-foreground/70 font-medium mb-3">{item.organization}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
