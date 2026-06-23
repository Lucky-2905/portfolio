import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download } from "lucide-react";
import MagneticButton from "./MagneticButton";

import ideathonCertImg from "@assets/Ideathon.jpg_1782130074899.jpeg";
import internshipCertUrl from "@assets/Lavanya_Reddy_1781875695186.pdf?url";
import buildfestCertUrl from "@assets/_Lavanya_Reddy_Certificate_1781875683727.pdf?url";
import winnersCertUrl from "@assets/winners_Certificate_1781875700054.pdf?url";

const certificates = [
  {
    title: "Blockchain Internship Certificate",
    issuer: "Arthachain",
    url: internshipCertUrl,
    type: "pdf",
    available: true
  },
  {
    title: "BuildFest Completion",
    issuer: "Arthachain",
    url: buildfestCertUrl,
    type: "pdf",
    available: true
  },
  {
    title: "Winners Certificate — CertiChain",
    issuer: "Arthachain BuildFest",
    url: winnersCertUrl,
    type: "pdf",
    available: true
  },
  {
    title: "Ideathon — SHINORA-26",
    issuer: "Teegala Krishna Reddy Engineering College",
    url: ideathonCertImg,
    type: "image",
    available: true
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<{ url: string; type: string; title: string } | null>(null);

  return (
    <section id="certificates" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 relative inline-block">
            Certificates
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphism rounded-lg p-8 flex flex-col justify-between group"
            >
              <div>
                <h3 className="text-xl font-serif text-foreground mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                <p className="text-sm tracking-wide text-muted-foreground uppercase">{cert.issuer}</p>
              </div>
              
              <div className="mt-8 flex items-center gap-4">
                {cert.available && cert.url ? (
                  <>
                    <button 
                      onClick={() => {
                        if (cert.type === "image") {
                          setSelectedCert({ url: cert.url!, type: cert.type, title: cert.title });
                        } else {
                          window.open(cert.url, "_blank", "noopener,noreferrer");
                        }
                      }}
                      className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                      data-testid={`cert-view-${index}`}
                    >
                      <ExternalLink size={16} /> View
                    </button>
                    <a 
                      href={cert.url} 
                      download
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                      data-testid={`cert-download-${index}`}
                    >
                      <Download size={16} /> Download
                    </a>
                  </>
                ) : (
                  <span className="text-sm font-medium px-3 py-1 rounded bg-background/50 text-muted-foreground border border-border/30">
                    Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-5xl h-[85vh] glassmorphism rounded-xl overflow-hidden flex flex-col border border-primary/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-border/30 bg-card/50">
                <h3 className="font-serif text-lg">{selectedCert.title}</h3>
                <div className="flex items-center gap-3">
                  <a
                    href={selectedCert.url}
                    download
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <Download size={16} /> Download
                  </a>
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-background/50"
                    data-testid="cert-modal-close"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              <div className="flex-1 bg-black overflow-auto flex items-center justify-center">
                {selectedCert.type === "image" ? (
                  <img
                    src={selectedCert.url}
                    alt={selectedCert.title}
                    className="max-w-full max-h-full object-contain p-4"
                  />
                ) : (
                  <iframe 
                    src={selectedCert.url} 
                    className="w-full h-full border-none"
                    title="Certificate PDF Viewer"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
