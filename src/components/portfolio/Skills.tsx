import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { 
  SiPython, SiJavascript, SiReact, SiNodedotjs, 
  SiMongodb, SiGit, SiGithub, SiMysql, 
  SiC, SiCplusplus, SiHtml5, SiCss
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "SQL", icon: null },
      { name: "JavaScript", icon: SiJavascript }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "React", icon: SiReact }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: Code }
    ]
  },
  {
    title: "Core Subjects",
    skills: [
      { name: "Data Structures", icon: null },
      { name: "OOP", icon: null },
      { name: "Machine Learning", icon: null },
      { name: "Blockchain", icon: null }
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 relative bg-card/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 relative inline-block">
            Technical Skills
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title}
              variants={itemVariants}
              className="glassmorphism rounded-lg p-6 group hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="text-sm uppercase tracking-widest text-primary mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-2 bg-background/50 border border-border/30 rounded-full px-3 py-1.5 text-sm text-foreground/80 hover:text-primary hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
                  >
                    {skill.icon && <skill.icon className="text-primary/70 group-hover/skill:text-primary transition-colors" />}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
