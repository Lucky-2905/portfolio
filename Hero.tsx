import { useRef, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "button" | "a";
  href?: string;
  download?: string | boolean;
  target?: string;
  rel?: string;
}

export default function MagneticButton({ 
  children, 
  className = "", 
  onClick,
  as = "button",
  href,
  download,
  target,
  rel
}: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const element = elementRef.current;
    
    if (!container || !element) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 1,
        ease: "power3.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);

    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, { scope: containerRef });

  const props = {
    ref: elementRef as any,
    className: `inline-flex items-center justify-center transition-colors ${className}`,
    onClick,
  };

  return (
    <div ref={containerRef} className="relative inline-block p-4 -m-4">
      {as === "button" ? (
        <button {...props}>{children}</button>
      ) : (
        <a {...props} href={href} download={download} target={target} rel={rel}>{children}</a>
      )}
    </div>
  );
}
