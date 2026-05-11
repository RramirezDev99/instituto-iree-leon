"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingDonate() {
  return (
    <motion.a
      href="#donar"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 lg:hidden inline-flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-2xl shadow-accent-500/40"
      aria-label="Donar"
    >
      <Heart className="w-5 h-5 animate-pulse" fill="currentColor" />
      Donar
    </motion.a>
  );
}
