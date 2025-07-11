"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  FileText,
  MessageSquare,
  Briefcase,
  Star,
  CheckCircle,
  ExternalLink,
  Mic,
  Users,
  TrendingUp,
  Zap,
  AlertTriangle,
  Play,
} from "lucide-react";
import React, { useState, useEffect } from "react";

// --- Custom Spotlight Button (Enhanced) ---
const SpotlightButton = ({ children, href }: { children: React.ReactNode; href?: string }) => {
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePos({ x: clientX - left, y: clientY - top });
  };

  const ButtonContent = (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: -999, y: -999 })}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-green-700 to-green-600 transition-all duration-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl"
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.25), transparent 80%)`,
          opacity: mousePos.x === -999 ? 0 : 1,
        }}
      />
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </motion.button>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {ButtonContent}
    </a>
  ) : ButtonContent;
};

// --- Enhanced "Flip" Button Component ---
const FlipButton = ({
  children,
  href,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const ButtonContent = (
    <motion.button
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      className="relative flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-semibold text-slate-800 bg-white/90 backdrop-blur-sm border-2 border-slate-200 hover:border-green-300 transition-all duration-300 rounded-xl overflow-hidden shadow-md hover:shadow-lg"
      style={{ perspective: "500px" }}
    >
      <AnimatePresence mode="wait">
        {!isHovered ? (
          <motion.span
            key="text"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="text-base sm:text-lg"
          >
            {children}
          </motion.span>
        ) : (
          <motion.span
            key="icon"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex items-center gap-2 text-green-600 text-base sm:text-lg"
          >
            <Play className="w-5 h-5" />
            <span>Watch Video</span>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );

  return href && !onClick ? (
    <a href={href}>
      {ButtonContent}
    </a>
  ) : ButtonContent;
};

// --- South African Interview Animation ---
const SouthAfricanInterviewVisual = () => (
  <div className="w-full h-full p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center bg-white shadow-lg rounded-xl sm:rounded-2xl">
    <motion.div 
      initial={{ scale: 0 }} 
      animate={{ scale: 1 }} 
      className="mb-4 p-3 sm:p-4 bg-gradient-to-r from-sa-gold-100 to-green-100 rounded-full"
    >
      <Mic className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
      className="text-center space-y-3"
    >
      <p className="text-xs sm:text-sm font-medium text-green-700 bg-green-100 px-3 py-2 rounded-lg">
        "Tell me about Ubuntu and how it applies to teamwork."
      </p>
      <div className="flex items-center justify-center space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-xs text-green-600 font-medium">Listening in South African English...</span>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="mt-4 bg-green-50 px-3 py-2 rounded-lg"
    >
      <div className="flex items-center space-x-2">
        <Star className="w-4 h-4 text-yellow-500 fill-current" />
        <span className="text-xs sm:text-sm text-green-700 font-medium">Cultural fit: 92%</span>
      </div>
    </motion.div>
  </div>
);

const UnemploymentStatsVisual = () => (
  <div className="w-full h-full p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center bg-white shadow-lg rounded-xl sm:rounded-2xl">
    <motion.div 
      initial={{ scale: 0 }} 
      animate={{ scale: 1 }} 
      className="mb-4 p-3 sm:p-4 bg-sa-gold-100 rounded-full"
    >
      <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-sa-gold-600" />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
      className="text-center space-y-3"
    >
      <div className="text-3xl font-bold text-sa-gold-600">32.9%</div>
      <p className="text-xs sm:text-sm text-slate-600">Youth unemployment in SA</p>
      <div className="text-2xl font-bold text-green-600">3M</div>
      <p className="text-xs sm:text-sm text-slate-600">Targeting to help</p>
    </motion.div>
  </div>
);

const OpenSourceVisual = () => (
  <div className="w-full h-full p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center bg-white shadow-lg rounded-xl sm:rounded-2xl">
    <motion.div 
      initial={{ scale: 0 }} 
      animate={{ scale: 1 }} 
      className="mb-4 p-3 sm:p-4 bg-blue-100 rounded-full"
    >
      <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
      className="text-center space-y-3"
    >
      <p className="text-sm font-medium text-blue-700 bg-blue-100 px-3 py-2 rounded-lg">
        100% Free & Open Source
      </p>
      <p className="text-xs text-slate-600">Built by the community, for the community</p>
      <div className="flex items-center justify-center space-x-2">
        <Zap className="w-4 h-4 text-orange-500" />
        <span className="text-xs text-orange-600 font-medium">Powered by donations</span>
      </div>
    </motion.div>
  </div>
);

// --- Animation Scenes ---
const animationScenes = [
  {
    key: "interview",
    icon: MessageSquare,
    title: "AI Interview Coach",
    subtitle: "Tailored for South African professionals...",
    content: <SouthAfricanInterviewVisual />,
  },
  {
    key: "impact",
    icon: TrendingUp,
    title: "Tackling Unemployment",
    subtitle: "Making a real difference in SA...",
    content: <UnemploymentStatsVisual />,
  },
  {
    key: "opensource",
    icon: Users,
    title: "Free & Open Source",
    subtitle: "Accessible to everyone who needs it...",
    content: <OpenSourceVisual />,
  },
];

export const Hero = () => {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSceneIndex((prevIndex) => (prevIndex + 1) % animationScenes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const CurrentScene = animationScenes[sceneIndex];
  const CurrentIcon = CurrentScene.icon;

  return (
    <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Enhanced South African Flag-Inspired Background */}
      <div className="absolute inset-0 z-0">
        {/* The Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:36px_36px] opacity-20 sm:opacity-30" />
        
        {/* Animated South African Flag Colors */}
        <motion.div 
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, #22c55e 0%, transparent 40%), radial-gradient(circle at 80% 80%, #fbbf24 0%, transparent 40%), radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 30%)",
              "radial-gradient(circle at 80% 20%, #fbbf24 0%, transparent 40%), radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 40%), radial-gradient(circle at 50% 50%, #22c55e 0%, transparent 30%)",
              "radial-gradient(circle at 50% 20%, #3b82f6 0%, transparent 40%), radial-gradient(circle at 20% 80%, #22c55e 0%, transparent 40%), radial-gradient(circle at 80% 50%, #fbbf24 0%, transparent 30%)",
              "radial-gradient(circle at 20% 20%, #22c55e 0%, transparent 40%), radial-gradient(circle at 80% 80%, #fbbf24 0%, transparent 40%), radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 30%)"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating particles in SA flag colors */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                i % 3 === 0 ? 'bg-green-400/30' : 
                i % 3 === 1 ? 'bg-yellow-400/30' : 'bg-blue-400/30'
              }`}
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                delay: i * 0.8
              }}
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + i * 8}%`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center bg-gradient-to-r from-sa-gold-100 to-green-100 text-green-800 font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6 border border-green-200 shadow-sm"
          >
            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-yellow-400 fill-current" />
            <span className="hidden sm:inline">Tackling SA's 32.9% Youth Unemployment</span>
            <span className="sm:hidden">Fighting Youth Unemployment</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter text-slate-900 mb-4 sm:mb-6 leading-tight"
          >
            <motion.span 
              className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              AIgnite
            </motion.span>{" "}Your <br className="hidden sm:block" />
            <motion.span 
              className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(34, 197, 94, 0.3)",
                  "0 0 40px rgba(34, 197, 94, 0.5)",
                  "0 0 20px rgba(34, 197, 94, 0.3)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              Interview Success
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            AI-powered interview practice with a <strong>South African voice</strong>, 
            designed to help you land your dream job. Free for those who need it most.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <SpotlightButton href="https://app.jobspark.co.za/auth">
              <span className="flex items-center">
                Start Practising Free
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </SpotlightButton>
            <FlipButton onClick={() => setShowVideo(true)}>How it Works</FlipButton>
          </motion.div>

          {/* Early Access Subtle Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 text-xs sm:text-sm text-orange-600 flex items-center justify-center lg:justify-start"
          >
            <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            <span>Early Access - <a href="/features/early-access" className="underline hover:text-orange-700">Learn more</a></span>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center space-x-1">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
              <span>AI-powered</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
              <span>Open Source</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-lg">🇿🇦</span>
              <span>Made for SA</span>
            </div>
          </motion.div>
        </motion.div>

        {/* --- Animated Viewport --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto aspect-[4/3] order-1 lg:order-2"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sa-gold-200 via-orange-200 to-green-200 rounded-2xl sm:rounded-3xl opacity-20 sm:opacity-30 blur-xl sm:blur-2xl"></div>
          <div className="relative w-full h-full bg-white/70 sm:bg-white/60 backdrop-blur-xl border-2 border-white/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl sm:shadow-2xl shadow-slate-400/20 flex flex-col items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={sceneIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full flex flex-col items-center justify-center space-y-3 sm:space-y-4"
              >
                <motion.div
                  className="p-2 sm:p-3 bg-white rounded-full shadow-lg"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <CurrentIcon className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </motion.div>
                <div className="text-center">
                  <p className="font-bold text-slate-800 text-sm sm:text-lg mb-1">
                    {CurrentScene.title}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">
                    {CurrentScene.subtitle}
                  </p>
                </div>
                <div className="w-full min-h-[120px] sm:min-h-[140px] flex items-center justify-center px-2">
                  {CurrentScene.content}
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Scene indicators */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
              {animationScenes.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                    index === sceneIndex ? 'bg-green-600 w-4 sm:w-6' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 sm:p-8"
        >
          <div className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute top-4 right-4 z-10">
              <button 
                onClick={() => setShowVideo(false)}
                className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              >
                <Play className="w-6 h-6" />
              </button>
            </div>
            
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/w93FOJ3pI3U?autoplay=1"
                title="JobSpark: How It Works"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};