import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

// Assets
import cryingBear from './assets/crying_bear.png';
import sadBear from './assets/sad_bear.png';
import dancingBear from './assets/dancing_bear.png';
import sparkleSound from './assets/cute-sparkle.mp3';

const playClickSound = () => {
  const audio = new Audio(sparkleSound);
  audio.play().catch(e => console.log("Audio play failed:", e));
};

const DodgeButton = ({ onAccept }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    const range = 600;
    const minJump = 150;
    let newX, newY;

    // Keep generating new positions until we find one far enough away
    do {
      newX = Math.random() * range - (range / 2);
      newY = Math.random() * range - (range / 2);
    } while (Math.abs(newX - position.x) < minJump && Math.abs(newY - position.y) < minJump);

    setPosition({ x: newX, y: newY });
  };

  return (
    <motion.button
      className="btn-no"
      animate={{ x: position.x, y: position.y }}
      onMouseEnter={moveButton}
      onClick={() => {
        moveButton();
        playClickSound();
      }}
    >
      Decline it
    </motion.button>
  );
};

const App = () => {
  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState('question'); // 'question' or 'reaction'

  const nextStep = () => {
    playClickSound();
    setStep(s => s + 1);
    setSubStep('question');
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        if (subStep === 'question') {
          return (
            <>
              {/* Corner Decorations */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="corner-decoration top-left"
              >💖</motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="corner-decoration top-right"
              >✨</motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="corner-decoration bottom-left"
              >✨</motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="corner-decoration bottom-right"
              >💖</motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="card card-wide">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', textAlign: 'left' }}>
                  <img
                    src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/bubu-dudu-1/sticker_1.webp?b2e7674a0af1d0ffe7aa84e5aab93f43&d=200x200"
                    alt="Bubu Dudu"
                    style={{ width: '100px', height: '100px', borderRadius: '1rem' }}
                  />
                  <div>
                    <h1 className="romantic-font">Question 1</h1>
                    <p style={{ margin: '0.5rem 0', fontSize: '1.2rem' }}>Are you her friend?</p>
                  </div>
                </div>
                <div className="btn-container">
                  <button className="btn-yes" onClick={nextStep}>Yes</button>
                  <button className="btn-no" onClick={() => {
                    playClickSound();
                    setSubStep('reaction');
                  }}>No</button>
                </div>
              </motion.div>
            </>
          );
        } else {
          return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="card">
              <img src={cryingBear} alt="Crying Bear" className="bear-img" />
              <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>Aww, don't say that... 🥺</p>
              <button className="btn-yes" onClick={() => {
                playClickSound();
                setSubStep('question');
              }}>Try Again</button>
            </motion.div>
          );
        }
      case 2:
        if (subStep === 'question') {
          return (
            <>
              {/* Corner Decorations */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="corner-decoration top-left"
              >🧸</motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="corner-decoration top-right"
              >✨</motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="corner-decoration bottom-left"
              >✨</motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="corner-decoration bottom-right"
              >🧸</motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="card card-wide">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', textAlign: 'left' }}>
                  <img
                    src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/bubu-dudu-1/sticker_8.webp?b2e7674a0af1d0ffe7aa84e5aab93f43&d=200x200"
                    alt="Bubu Dudu Cute"
                    style={{ width: '100px', height: '100px', borderRadius: '1rem' }}
                  />
                  <div>
                    <h1 className="romantic-font">Question 2</h1>
                    <p style={{ margin: '0.5rem 0', fontSize: '1.2rem' }}>Do you look cute to her?</p>
                  </div>
                </div>
                <div className="btn-container">
                  <button className="btn-yes" onClick={nextStep}>Yes</button>
                  <button className="btn-no" onClick={() => {
                    playClickSound();
                    setSubStep('reaction');
                  }}>No</button>
                </div>
              </motion.div>
            </>
          );
        } else {
          return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="card">
              <img src={sadBear} alt="Sad Bear" className="bear-img" />
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>You do look cute to her, cutieee 💗</p>
              <button className="btn-yes" onClick={() => {
                playClickSound();
                setSubStep('question');
              }}>Try Again</button>
            </motion.div>
          );
        }
      case 3:
        return (
          <>
            {/* Corner Decorations */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="corner-decoration top-left"
            >🎵</motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="corner-decoration top-right"
            >⭐</motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="corner-decoration bottom-left"
            >⭐</motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="corner-decoration bottom-right"
            >🎶</motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', textAlign: 'left', width: '100%', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <img
                    src="https://media.tenor.com/36d8ovZxZsgAAAAm/bubu-bubu-dudu.webp"
                    alt="Bubu Dudu Song"
                    style={{ width: '100px', height: '100px', borderRadius: '1rem' }}
                  />
                  <div>
                    <h1 className="romantic-font">Question 3</h1>
                    <p style={{ margin: '0.5rem 0', fontSize: '1.2rem' }}>Will you really sing a song for her?</p>
                  </div>
                </div>
                <motion.img
                  initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  src="https://media.tenor.com/FpRtffe30hMAAAAm/pizza.webp"
                  alt="Pizza sticker"
                  style={{ width: '80px', height: '80px', borderRadius: '0.5rem' }}
                />
              </div>
              <div className="btn-container">
                <button className="btn-yes" onClick={nextStep}>Yes</button>
                <button className="btn-yes" onClick={nextStep}>Yes</button>
              </div>
            </motion.div>
          </>
        );
      case 4:
        return (
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Corner Decorations */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="corner-decoration top-left">🎀</motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="corner-decoration top-right">⭐</motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="corner-decoration bottom-left">⭐</motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="corner-decoration bottom-right">🎀</motion.div>

            {/* Background Hearts Eruption */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  x: (Math.random() - 0.5) * 600,
                  y: (Math.random() - 0.5) * 600,
                  rotate: Math.random() * 360
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                style={{ position: 'absolute', fontSize: '2rem', zIndex: 5 }}
              >
                {['💖', '✨', '🌸', '💗'][Math.floor(Math.random() * 4)]}
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', textAlign: 'left', width: '100%' }}>
                <img
                  src="https://cdn.cdnstep.com/l3XP16i4jNpGBntzrSqF/25-1.thumb128.png"
                  alt="Chocolates Sticker"
                  style={{ width: '100px', height: '100px', borderRadius: '1rem' }}
                />
                <div>
                  <h1 className="romantic-font">One last thing...</h1>
                  <p style={{ margin: '0.5rem 0', fontSize: '1.2rem' }}>I have some chocolates for you 🍫</p>
                </div>
              </div>
              <div className="btn-container">
                <button className="btn-yes" onClick={nextStep}>Accept it</button>
                <DodgeButton />
              </div>
            </motion.div>
          </div>
        );
      case 5:
        return (
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            {/* Corner Decorations */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="corner-decoration top-left">🍫</motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="corner-decoration top-right">🍫</motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="corner-decoration bottom-left">🍫</motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="corner-decoration bottom-right">🍫</motion.div>

            {/* Background Hearts Eruption */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  x: (Math.random() - 0.5) * 600,
                  y: (Math.random() - 0.5) * 600,
                  rotate: Math.random() * 360
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                style={{ position: 'absolute', fontSize: '2rem', zIndex: 5 }}
              >
                {['💖', '✨', '🌸', '💗'][Math.floor(Math.random() * 4)]}
              </motion.div>
            ))}

            <div style={{ position: 'relative' }}>
              <motion.img
                initial={{ x: -100, opacity: 0, rotate: -30 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: 'spring' }}
                src="https://cdn.cdnstep.com/l3XP16i4jNpGBntzrSqF/21-1.thumb128.png"
                alt="Side Sticker Left"
                style={{ position: 'absolute', left: '-160px', top: '50%', transform: 'translateY(-50%)', width: '130px' }}
                className="celebration-side-sticker"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card floating"
              >
                <img src={dancingBear} alt="Dancing Bear" className="bear-img" />
                <h1 className="romantic-font" style={{ fontSize: '3rem' }}>YAYYYY 🎉💗</h1>
                <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>You're the best!</p>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  style={{ fontSize: '3rem', marginTop: '2rem' }}
                >
                  💖✨💖
                </motion.div>
              </motion.div>
              <motion.img
                initial={{ x: 100, opacity: 0, rotate: 30 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: 'spring' }}
                src="https://cdn.cdnstep.com/l3XP16i4jNpGBntzrSqF/18-3.thumb128.png"
                alt="Side Sticker Right"
                style={{ position: 'absolute', right: '-160px', top: '50%', transform: 'translateY(-50%)', width: '130px' }}
                className="celebration-side-sticker"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        <div key={step + subStep}>
          {renderContent()}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default App;
