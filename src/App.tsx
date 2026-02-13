import { useState } from 'react'
import { motion } from "motion/react"
import FloatingHearts from './components/FloatingHearts';
import { Heart, PartyPopper, SquareArrowRight, SquareArrowLeft} from 'lucide-react';
import Slider from "react-slick"
import Sparkles from './components/Sparkles';

function App() {
  const [showFireworks, setShowFireworks] = useState(false);
  const [noAttemptCount, setNoAttemptCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const carouselImages = [
    '/engaged.jpg',
    '/wedding.jpg',
    '/dancing.jpg',
    '/lanterns.jpg',
    '/hats.jpg'
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <SquareArrowRight color="red" />,
    prevArrow: <SquareArrowLeft color="red" />,
  };

  const handleNoHover = () => {
    const newX = Math.random() * (window.innerWidth - 200);
    const newY = Math.random() * (window.innerHeight - 100);
    setNoPosition({ x: newX, y: newY });
    setNoAttemptCount(prev => prev + 1);
  };

  const handleYes = () => {
    console.log("YES CLICKED")
    setShowFireworks(true);
  };

  if (showFireworks) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #f472b6, #f87171, #db2777)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        zIndex: 10
      }}>
        <Sparkles />

        <motion.div 
          style={{
            textAlign: "center",
            padding: "0 1rem"
          }}
          initial={{ scale: 0, rotate: -360 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <PartyPopper style={{
              width: "8rem",
              height: "8rem",
              marginBottom: "2rem",
              color: "oklch(90.5% 0.182 98.111)"
            }}/>
          </motion.div>

          <h1 style={{
            fontSize: "4.5rem",
            fontWeight: "bold",
            color: "white",
            marginBottom: "1.5rem"
          }}>
            YIPPEE!
          </h1>
          <p style={{
            fontSize: "2rem",
            color: "oklch(94.8% 0.028 342.258)",
            marginBottom: "1rem"
          }}>
            This is the best day of my life! 💕
          </p>

          <motion.div
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <Heart style={{
              width: "8rem",
              height: "8rem",
              marginBottom: "2rem",
              color: "oklch(63.7% 0.237 25.331)"
            }} fill="currentColor"/>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, #f472b6, #f87171, #db2777)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      position: "relative",
      zIndex: 10
    }}>
      <FloatingHearts />

      <motion.div
        style={{
          backgroundColor: "white",
          borderRadius: "1.5rem",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          padding: "1rem 2rem",
          maxWidth: "42rem",
          width: "100%",
          position: "relative",
        }}
        initial={{ scale: 0, rotate: -360 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <motion.div
          animate={{
            rotate: [0, -5, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            textAlign: "center",
            marginBottom: "0.75rem",
          }}
        >
          <Heart
            fill="currentColor"
            style={{
              width: "6rem",
              height: "6rem",
              color: "red"
            }}  
          />
        </motion.div>

        <motion.h1 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "0.75rem",
            color: "red"
          }}
        >
          Will You Be My Valentine?
        </motion.h1>

        <div style={{marginBottom: "2.5rem"}}>
          <Slider {...sliderSettings}>
            {carouselImages.map((image, index) => (
              <div key={index} style={{padding: "0 0.5rem"}}>
                <div style={{
                  aspectRatio: "16 / 9",
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "0.75rem"
                }}>
                  <img
                    src={`/valentines-day${image}`}
                    alt={`Memory ${index + 1}`}
                    style={{ objectFit: "cover", width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap"
        }}>
          <motion.button
            style={{
              backgroundColor: "#ef4444",
              color: "white",
              padding: "1rem 3rem",
              borderRadius: "50px",
              fontSize: "1.5rem",
              fontWeight: "bold",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              transition: "all 150ms ease-in-out",
              border: "none",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.1, backgroundColor: "#dc2626" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleYes}
          >
            YES! 💕
          </motion.button>
          <motion.button
            style={{
              backgroundColor: "#d1d5db",
              color: "#374151",
              padding: "1rem 2rem",
              borderRadius: "50px",
              fontSize: "1.25rem",
              fontWeight: "bold",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              border: "none",
              cursor: "pointer",
              position: noAttemptCount > 0 ? 'fixed' : 'relative'
            }}
            animate={{
              left: noAttemptCount > 0 ? noPosition.x : 'auto',
              top: noAttemptCount > 0 ? noPosition.y : 'auto'
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            onMouseEnter={handleNoHover}
            onClick={handleNoHover}
          >
            NO
          </motion.button>
        </div>

        <motion.div
          style={{
            marginTop: "1.5rem",
            textAlign: "center",
            fontSize: ".75rem",
            color: "#a1a1a1"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>P.S. - I promise to be your Valentine forever, not just today!</p>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default App
