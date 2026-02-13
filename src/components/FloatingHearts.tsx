import { Heart } from "lucide-react"
import { motion } from "motion/react"

interface FloatingHeartsProps {
  count?: number;
  color?: string;
}

export default function FloatingHearts({count = 50, color = "red"}: FloatingHeartsProps) {
  return Array.from({length: count}, (_, i) => (
    <motion.div
      key={i}
      initial={{ 
        y: (window.innerHeight / 2) + 50, 
        x: (window.innerWidth / 2) - (Math.random() * window.innerWidth),
        scale: Math.random() * 1 + 0.5
      }}
      animate={{ 
        y: -100 - (window.innerHeight / 2),
        x: (window.innerWidth / 2) - (Math.random() * window.innerWidth),
        rotate: Math.random() * 360
      }}
      transition={{ 
        duration: Math.random() * 5 + 5,
        repeat: Infinity,
        ease: "linear",
        delay: Math.random() * 5
      }}
      style={{
        position: "absolute",
        color: color,
        opacity: 70,
      }}
    >
      <Heart fill="currentColor" size={Math.random() * 30 + 20} />
    </motion.div>
  ))
}