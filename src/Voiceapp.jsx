import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function AIAssistantUI() {
  const [isListening, setIsListening] = useState(false)

  useEffect(() => {
    if (isListening) {
      const timer = setTimeout(() => setIsListening(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [isListening])

  const glowLines = [
    { color: "#8B5CF6", delay: 0 },
    { color: "#EC4899", delay: 0.1 },
    { color: "#3B82F6", delay: 0.2 },
    { color: "#10B981", delay: 0.3 },
    { color: "#F59E0B", delay: 0.4 },
    { color: "#EF4444", delay: 0.5 },
    { color: "#6366F1", delay: 0.6 },
    { color: "#14B8A6", delay: 0.7 },
    { color: "#84CC16", delay: 0.8 },
    { color: "#F472B6", delay: 0.9 },
    { color: "#22D3EE", delay: 1.0 },
    { color: "#FB923C", delay: 1.1 },
    { color: "#A78BFA", delay: 1.2 },
    { color: "#34D399", delay: 1.3 },
    { color: "#FBBF24", delay: 1.4 },
    { color: "#F87171", delay: 1.5 },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 overflow-hidden">
      <div className="text-center mb-8 relative z-10">
        <p className="text-lg mb-2 text-gray-400">I'm listening. Please ask me</p>
      </div>

      <div className="relative w-full h-80 mb-8">
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            How May I help you?
          </motion.h1>
        </div>
        {glowLines.map((line, index) => (
          <motion.div
            key={index}
            className="absolute top-0 left-0 w-full h-full"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: line.delay,
              ease: "easeInOut",
            }}
          >
            <svg viewBox="0 0 1440 320" className="w-full h-full">
              <motion.path
                fill="none"
                strokeLinecap="round"
                strokeWidth="2"
                stroke={line.color}
                d="M0,160 C320,300,420,300,740,160 C1060,20,1120,20,1440,160"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: line.delay,
                }}
                style={{
                  filter: "blur(3px)",
                  boxShadow: `0 0 8px ${line.color}, 0 0 12px ${line.color}`,
                }}
              />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="relative z-30">
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(139,92,246,0) 70%)",
            filter: "blur(8px)",
          }}
        />
        <button
          onClick={() => setIsListening(true)}
          className={`relative rounded-full p-4 transition-all duration-300 ${
            isListening ? 'bg-purple-600 animate-pulse' : 'bg-gray-700 hover:bg-gray-600'
          }`}
          aria-label={isListening ? "Listening" : "Start listening"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}