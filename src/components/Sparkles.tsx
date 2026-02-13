import { motion } from "motion/react";
import { Sparkles as BaseSparkles } from "lucide-react";

interface SparklesProps {
  count?: number
}

export default function Sparkles({count = 50}: SparklesProps) {
  return Array.from({ length: count }, (_, i) => (
    <motion.div
      key={i}
      style={{position: "absolute", zIndex: 1}}
      initial={{
        scale: 0,
        x: 0,
        y: 0
      }}
      animate={{
        scale: [0, 2, 1],
        x: (Math.random() - 0.5) * window.innerWidth,
        y: (Math.random() - 0.5) * window.innerHeight,
        opacity: [0.5, 0.5, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: Math.random() * 2
      }}
    >
      <BaseSparkles style={{color: "oklch(90.5% 0.182 98.111)"}} size={40} />
    </motion.div>
  ))
}