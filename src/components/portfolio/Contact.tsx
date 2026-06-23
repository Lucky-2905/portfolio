import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Check, Copy } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters.")
});

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 5000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("lavanyareddy29.05@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 relative inline-block">
            Get In Touch
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <h3 className="text-2xl font-serif mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-10 font-light leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 group cursor-pointer" onClick={copyEmail}>
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors flex items-center gap-2">
                    lavanyareddy29.05@gmail.com
                    {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <MagneticButton 
                as="a" 
                href="https://github.com/Lucky-2905" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <FaGithub size={20} />
              </MagneticButton>
              <MagneticButton 
                as="a" 
                href="https://www.linkedin.com/in/lavanya-reddy-6735332b7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <FaLinkedin size={20} />
              </MagneticButton>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3"
          >
            <div className="glassmorphism p-8 md:p-10 rounded-xl relative overflow-hidden">
              <AnimatePresence>
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-10 bg-card/95 backdrop-blur flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-6">
                      <Check size={32} />
                    </div>
                    <h3 className="text-2xl font-serif mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              {...field} 
                              className="bg-background/50 border-border/30 focus-visible:ring-primary/50 focus-visible:border-primary rounded-none h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="john@example.com" 
                              {...field} 
                              className="bg-background/50 border-border/30 focus-visible:ring-primary/50 focus-visible:border-primary rounded-none h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Subject (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Hello!" 
                            {...field} 
                            className="bg-background/50 border-border/30 focus-visible:ring-primary/50 focus-visible:border-primary rounded-none h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message here..." 
                            {...field} 
                            className="bg-background/50 border-border/30 focus-visible:ring-primary/50 focus-visible:border-primary rounded-none min-h-[150px] resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="pt-2">
                    <MagneticButton 
                      type="submit"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-sm font-medium tracking-wide text-sm w-full border border-primary"
                    >
                      Send Message
                    </MagneticButton>
                  </div>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
