import { motion } from "framer-motion";
import { useMotionValue, useTransform } from "framer-motion";
import profilePhoto from "@assets/23TP1A0526_1782130053505.png";

export default function About() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

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

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full relative group cursor-pointer"
            >
              <div className="absolute inset-0 rounded-full border border-primary/30 group-hover:border-primary/60 transition-colors duration-500 overflow-hidden shadow-[0_0_40px_rgba(201,168,76,0.15)] group-hover:shadow-[0_0_60px_rgba(201,168,76,0.3)]">
                <img
                  src={profilePhoto}
                  alt="Lavanya Reddy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              </div>
              <div className="absolute -inset-6 rounded-full border-[0.5px] border-primary/20 border-dashed animate-[spin_30s_linear_infinite]" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 space-y-8"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              Computer Science undergraduate at Siddhartha Institute of Engineering and Technology with a strong foundation in Python, Data Structures, Object-Oriented Programming, Full Stack Development, Machine Learning, and Blockchain. Passionate about software development, problem solving, and emerging technologies. Currently exploring the intersection of AI and Blockchain to build meaningful, real-world solutions.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border/20">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Education</h4>
                <p className="text-foreground font-medium">B.Tech CSE, 2027</p>
                <p className="text-sm text-muted-foreground mt-1">Siddhartha Institute of Engineering and Technology</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Academic Performance</h4>
                <p className="text-primary font-serif text-2xl">8.66 <span className="text-sm font-sans text-muted-foreground uppercase tracking-widest">CGPA</span></p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Experience</h4>
                <p className="text-foreground font-medium">Blockchain Intern</p>
                <p className="text-sm text-muted-foreground mt-1">Arthachain</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Highlights</h4>
                <p className="text-foreground font-medium">SIH 2025 Participant</p>
                <p className="text-sm text-muted-foreground mt-1">2+ Major Projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
