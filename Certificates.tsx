import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { Download, FileText } from "lucide-react";
import resumeUrl from "@assets/CHITTEPU_LAVANYA_RESUME_1781875689716.pdf?url";

export default function Resume() {
  return (
    <section className="py-24 relative bg-card/30 border-y border-border/10">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            My Resume
          </h2>
          <p className="text-muted-foreground mb-10 text-lg font-light leading-relaxed max-w-xl mx-auto">
            Download my latest resume to learn more about my experience, education, and technical skills.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton 
              as="a" 
              href={resumeUrl}
              download="Lavanya_Reddy_Resume.pdf"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-sm font-medium tracking-wide text-sm w-full sm:w-auto flex items-center gap-3 border border-primary"
            >
              <Download size={18} />
              Download Resume
            </MagneticButton>
            
            <MagneticButton 
              as="a"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-primary/10 text-primary px-8 py-4 rounded-sm font-medium tracking-wide text-sm border border-primary/50 w-full sm:w-auto flex items-center gap-3 backdrop-blur-sm"
            >
              <FileText size={18} />
              Preview Resume
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
