"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingDonate() {
  return (
    <motion.a
      href="https://wa.me/524772566524?text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20del%20Instituto%20IREE%20Le%C3%B3n"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-5 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-display rounded-full shadow-2xl shadow-brand-500/40 uppercase"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-5 h-5 animate-pulse" />
      <span className="hidden sm:inline">WhatsApp</span>
    </motion.a>
  );
}
