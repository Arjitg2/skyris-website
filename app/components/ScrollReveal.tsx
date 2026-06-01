"use client";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

export default function ScrollReveal({ children, delay = 0, y = 80, className = "" }: { children: ReactNode, delay?: number, y?: number, className?: string }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: isMobile ? 15 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: isMobile ? "0px 0px 200px 0px" : "-50px" }}
      transition={{ duration: isMobile ? 0.45 : 0.8, ease: [0.22, 1, 0.36, 1], delay: isMobile ? delay * 0.4 : delay }}
    >
      {children}
    </motion.div>
  );
}
