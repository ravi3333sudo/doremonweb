import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

// Character components
const Doraemon = ({ className = "" }) => (
  <motion.div 
    className={`relative ${className}`}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div 
      className="w-64 h-64 bg-blue-400 rounded-full relative overflow-hidden border-4 border-black"
      animate={{ 
        y: [0, -5, 0],
      }}
      transition={{ 
        repeat: Infinity,
        duration: 2,
      }}
    >
      {/* Face */}
      <div className="w-56 h-44 bg-white rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
      
      {/* Eyes */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex space-x-10">
        <motion.div 
          className="w-10 h-10 bg-white rounded-full border-4 border-black relative"
          animate={{ scaleY: [1, 0.2, 1] }}
          transition={{ repeat: Infinity, duration: 3, repeatDelay: 5 }}
        >
          <div className="w-3 h-3 bg-black rounded-full absolute bottom-1 right-1"></div>
        </motion.div>
        <motion.div 
          className="w-10 h-10 bg-white rounded-full border-4 border-black relative"
          animate={{ scaleY: [1, 0.2, 1] }}
          transition={{ repeat: Infinity, duration: 3, repeatDelay: 5 }}
        >
          <div className="w-3 h-3 bg-black rounded-full absolute bottom-1 left-1"></div>
        </motion.div>
      </div>
      
      {/* Nose */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-black"></div>
        <div className="w-1 h-14 bg-black absolute top-6 left-1/2 transform -translate-x-1/2"></div>
      </div>
      
      {/* Mouth */}
      <motion.div 
        className="w-32 h-12 border-2 border-black border-t-0 rounded-b-full absolute top-36 left-1/2 transform -translate-x-1/2"
        animate={{ 
          width: [32 * 4, 28 * 4, 32 * 4],
          height: [12, 16, 12]
        }}
        transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
      ></motion.div>
      
      {/* Bell */}
      <motion.div 
        className="w-12 h-12 bg-yellow-400 rounded-full border-2 border-black absolute top-48 left-1/2 transform -translate-x-1/2"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 0.5, repeatDelay: 2 }}
      >
        <div className="w-10 h-1 bg-black absolute top-2 left-1/2 transform -translate-x-1/2"></div>
        <div className="w-4 h-4 bg-black rounded-full absolute bottom-1 left-1/2 transform -translate-x-1/2"></div>
      </motion.div>
    </motion.div>
  </motion.div>
);

const Nobita = ({ className = "" }) => (
  <motion.div 
    className={`relative ${className}`}
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    <motion.div 
      className="w-48 h-56 relative"
      animate={{ 
        y: [0, -3, 0],
      }}
      transition={{ 
        repeat: Infinity,
        duration: 2.5,
      }}
    >
      {/* Head */}
      <div className="w-36 h-36 bg-orange-200 rounded-full relative border-2 border-black">
        {/* Hair */}
        <div className="w-36 h-16 bg-black absolute -top-2 left-0 rounded-t-full"></div>
        
        {/* Eyes */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex space-x-10">
          <motion.div 
            className="w-8 h-8 bg-white rounded-full border-2 border-black relative overflow-hidden"
            animate={{ scaleY: [1, 0.2, 1] }}
            transition={{ repeat: Infinity, duration: 3, repeatDelay: 4 }}
          >
            <div className="w-3 h-3 bg-black rounded-full absolute bottom-1 right-1"></div>
          </motion.div>
          <motion.div 
            className="w-8 h-8 bg-white rounded-full border-2 border-black relative overflow-hidden"
            animate={{ scaleY: [1, 0.2, 1] }}
            transition={{ repeat: Infinity, duration: 3, repeatDelay: 4 }}
          >
            <div className="w-3 h-3 bg-black rounded-full absolute bottom-1 left-1"></div>
          </motion.div>
        </div>
        
        {/* Mouth */}
        <motion.div 
          className="w-16 h-6 border-2 border-black border-t-0 rounded-b-full absolute top-28 left-1/2 transform -translate-x-1/2"
          animate={{ width: [16 * 4, 14 * 4, 16 * 4] }}
          transition={{ repeat: Infinity, duration: 3, repeatDelay: 1 }}
        ></motion.div>
        
        {/* Glasses */}
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-32">
          <div className="w-full h-1 bg-black"></div>
          <div className="flex justify-between">
            <div className="w-10 h-10 rounded-full border-2 border-black"></div>
            <div className="w-10 h-10 rounded-full border-2 border-black"></div>
          </div>
        </div>
      </div>
      
      {/* Body */}
      <div className="w-32 h-24 bg-yellow-400 rounded-md absolute -bottom-2 left-1/2 transform -translate-x-1/2 border-2 border-black"></div>
    </motion.div>
  </motion.div>
);

const Gadget = ({ onClick }) => (
  <motion.div
    className="absolute bottom-10 right-10 cursor-pointer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
  >
    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-blue-600 shadow-lg">
      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
        <span className="text-white text-xl font-bold">?</span>
      </div>
    </div>
    <div className="mt-2 text-center text-sm font-bold text-blue-600">
      Magic Gadget
    </div>
  </motion.div>
);

export default function DoraemonWorld() {
  const [activePage, setActivePage] = useState('home');
  const [showGadget, setShowGadget] = useState(null);
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    // Auto-hide gadget after display
    if (showGadget) {
      const timer = setTimeout(() => {
        setShowGadget(null);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [showGadget]);

  const gadgets = [
    {
      id: 'bamboocopter',
      name: 'Bamboo Copter',
      description: 'A small helicopter that allows its user to fly through the sky',
      animation: (
        <motion.div 
          className="bg-green-200 p-6 rounded-lg shadow-lg relative border-2 border-green-600"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
        >
          <h3 className="text-xl font-bold text-green-800 mb-2">Bamboo Copter</h3>
          <p className="mb-4">A small helicopter that allows its user to fly through the sky</p>
          <Button 
            onClick={() => setIsFlying(!isFlying)}
            variant="outline" 
            className="bg-green-500 text-white hover:bg-green-600"
          >
            {isFlying ? 'Land' : 'Try it!'}
          </Button>
          
          <div className="absolute -top-10 right-0">
            <motion.div 
              className="w-20 h-4 bg-green-700 rounded-md relative"
              animate={{ 
                rotateY: isFlying ? 360 : 0,
              }}
              transition={{ 
                duration: 0.1,
                repeat: isFlying ? Infinity : 0,
                ease: "linear"
              }}
            >
              <div className="w-1 h-10 bg-green-700 absolute top-4 left-1/2 transform -translate-x-1/2"></div>
            </motion.div>
          </div>
        </motion.div>
      )
    },
    {
      id: 'anywhereDoor',
      name: 'Anywhere Door',
      description: 'A door that can take you anywhere you want to go',
      animation: (
        <motion.div 
          className="bg-blue-200 p-6 rounded-lg shadow-lg relative border-2 border-blue-600"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
        >
          <h3 className="text-xl font-bold text-blue-800 mb-2">Anywhere Door</h3>
          <p className="mb-4">A door that can take you anywhere you want to go</p>
          <div className="mt-4 flex justify-center">
            <motion.div 
              className="w-40 h-60 bg-brown-500 border-4 border-yellow-800 rounded-t-lg relative"
              whileHover={{ 
                rotateY: 45,
                transition: { duration: 0.5 }
              }}
            >
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-600"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )
    },
    {
      id: 'timeShift',
      name: 'Time Shifter',
      description: 'A device that allows you to travel back and forth through time',
      animation: (
        <motion.div 
          className="bg-purple-200 p-6 rounded-lg shadow-lg relative border-2 border-purple-600"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
        >
          <h3 className="text-xl font-bold text-purple-800 mb-2">Time Shifter</h3>
          <p className="mb-4">A device that allows you to travel back and forth through time</p>
          <div className="mt-4 flex justify-center">
            <motion.div 
              className="w-24 h-24 bg-purple-500 rounded-full border-4 border-white flex items-center justify-center"
              animate={{ 
                rotate: 360,
                borderWidth: [4, 2, 4],
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                borderWidth: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-purple-300 rounded-full flex items-center justify-center"
                animate={{ 
                  rotate: -360,
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                <div className="w-8 h-8 bg-purple-700 rounded-full"></div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-200 relative overflow-hidden">
      {/* Navigation */}
      <nav className="bg-blue-500 text-white p-4 shadow-md z-20">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <h1 className="text-2xl font-bold">Doraemon World</h1>
          <div className="flex space-x-4">
            <Button 
              variant={activePage === 'home' ? "secondary" : "ghost"} 
              onClick={() => setActivePage('home')}
              className="font-medium"
            >
              Home
            </Button>
            <Button 
              variant={activePage === 'characters' ? "secondary" : "ghost"} 
              onClick={() => setActivePage('characters')}
              className="font-medium"
            >
              Characters
            </Button>
            <Button 
              variant={activePage === 'gadgets' ? "secondary" : "ghost"} 
              onClick={() => setActivePage('gadgets')}
              className="font-medium"
            >
              Gadgets
            </Button>
          </div>
        </div>
      </nav>

      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-30"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-32 h-32 bg-blue-300 rounded-full opacity-30"
        animate={{
          x: [0, -120, 0],
          y: [0, -70, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-300 rounded-full opacity-20"
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6 z-10">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col md:flex-row items-center justify-around py-10"
            >
              <motion.div 
                className="max-w-md text-center md:text-left mb-8 md:mb-0"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
                  Welcome to the World of Doraemon!
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  Join Doraemon and friends on an adventure filled with magical gadgets, friendship, and fun!
                </p>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <Button 
                    onClick={() => setActivePage('gadgets')} 
                    className="bg-blue-500 hover:bg-blue-700"
                  >
                    Explore Gadgets
                  </Button>
                  <Button 
                    onClick={() => setActivePage('characters')} 
                    variant="outline"
                  >
                    Meet Characters
                  </Button>
                </div>
              </motion.div>
              
              <Doraemon className="mt-8 md:mt-0" />
            </motion.div>
          )}
          
          {activePage === 'characters' && (
            <motion.div
              key="characters"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-10"
            >
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Meet the Characters
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-300"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                >
                  <div className="flex justify-center mb-4">
                    <Doraemon className="scale-75" />
                  </div>
                  <h3 className="text-2xl font-bold text-center text-blue-700 mb-2">Doraemon</h3>
                  <p className="text-gray-600 text-center">
                    A robotic cat from the 22nd century, sent back in time to help Nobita become successful.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-300"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(252, 211, 77, 0.5)" }}
                >
                  <div className="flex justify-center mb-4">
                    <Nobita className="scale-75" />
                  </div>
                  <h3 className="text-2xl font-bold text-center text-yellow-600 mb-2">Nobita</h3>
                  <p className="text-gray-600 text-center">
                    A young boy who is often lazy and unlucky, but has a kind heart.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-300"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(110, 231, 183, 0.5)" }}
                >
                  <div className="flex justify-center mb-4">
                    <motion.div 
                      className="w-48 h-56 relative"
                      animate={{ 
                        y: [0, -3, 0],
                      }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 2.5,
                      }}
                    >
                      <div className="w-36 h-36 bg-orange-200 rounded-full relative border-2 border-black">
                        <div className="w-36 h-16 bg-black absolute -top-2 left-0 rounded-t-full"></div>
                        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 flex space-x-10">
                          <div className="w-8 h-8 bg-white rounded-full border-2 border-black relative">
                            <div className="w-3 h-3 bg-black rounded-full absolute bottom-1 right-1"></div>
                          </div>
                          <div className="w-8 h-8 bg-white rounded-full border-2 border-black relative">
                            <div className="w-3 h-3 bg-black rounded-full absolute bottom-1 left-1"></div>
                          </div>
                        </div>
                        <motion.div 
                          className="w-16 h-6 bg-white border-2 border-black rounded-full absolute top-28 left-1/2 transform -translate-x-1/2"
                          animate={{ scaleX: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        ></motion.div>
                      </div>
                      <div className="w-32 h-24 bg-red-400 rounded-md absolute -bottom-2 left-1/2 transform -translate-x-1/2 border-2 border-black"></div>
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold text-center text-red-600 mb-2">Shizuka</h3>
                  <p className="text-gray-600 text-center">
                    The smart, kind and pretty neighborhood girl who is Nobita's best friend.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
          
          {activePage === 'gadgets' && (
            <motion.div
              key="gadgets"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-10"
            >
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Magical Gadgets
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gadgets.map(gadget => (
                  <motion.div 
                    key={gadget.id}
                    className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
                  >
                    <div className="mb-4">
                      {/* Gadget with Doraemon cartoon */}
                      <div className="flex justify-center relative h-48">
                        {gadget.id === 'bamboocopter' && (
                          <div className="relative">
                            {/* Bamboo Copter Cartoon Image */}
                            <motion.div 
                              className="w-40 h-40 relative"
                              animate={{ y: [0, -5, 0] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                            >
                              {/* Doraemon Head */}
                              <div className="w-36 h-36 bg-blue-400 rounded-full relative border-2 border-black">
                                {/* Face */}
                                <div className="w-32 h-24 bg-white rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
                                
                                {/* Eyes */}
                                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex space-x-8">
                                  <div className="w-8 h-8 bg-white rounded-full border-2 border-black relative">
                                    <div className="w-3 h-3 bg-black rounded-full absolute bottom-1 right-1"></div>
                                  </div>
                                  <div className="w-8 h-8 bg-white rounded-full border-2 border-black relative">
                                    <div className="w-3 h-3 bg-black rounded-full absolute bottom-1 left-1"></div>
                                  </div>
                                </div>
                                
                                {/* Nose */}
                                <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                                  <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-black"></div>
                                </div>
                                
                                {/* Mouth */}
                                <div className="w-24 h-10 border-2 border-black border-t-0 rounded-b-full absolute top-22 left-1/2 transform -translate-x-1/2"></div>
                                
                                {/* Bamboo Copter on head */}
                                <motion.div 
                                  className="absolute -top-10 left-1/2 transform -translate-x-1/2"
                                  animate={{ rotateY: 360 }}
                                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                >
                                  <div className="w-24 h-4 bg-green-600 rounded-md relative">
                                    <div className="w-1 h-10 bg-green-600 absolute -top-8 left-1/2 transform -translate-x-1/2"></div>
                                  </div>
                                </motion.div>
                              </div>
                            </motion.div>
                          </div>
                        )}
                        
                        {gadget.id === 'anywhereDoor' && (
                          <div className="relative">
                            {/* Anywhere Door Cartoon Image */}
                            <motion.div 
                              className="relative"
                              whileHover={{ scale: 1.05 }}
                            >
                              {/* Door */}
                              <div className="w-32 h-48 bg-yellow-700 border-4 border-yellow-900 rounded-t-lg relative">
                                {/* Doraemon peeking from door */}
                                <motion.div 
                                  className="absolute -right-12 top-16"
                                  initial={{ x: 30, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 0.5 }}
                                >
                                  {/* Doraemon Head */}
                                  <div className="w-28 h-28 bg-blue-400 rounded-full relative border-2 border-black">
                                    {/* Face */}
                                    <div className="w-24 h-18 bg-white rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
                                    
                                    {/* Eyes */}
                                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex space-x-6">
                                      <div className="w-6 h-6 bg-white rounded-full border-2 border-black relative">
                                        <div className="w-2 h-2 bg-black rounded-full absolute bottom-0 right-0"></div>
                                      </div>
                                      <div className="w-6 h-6 bg-white rounded-full border-2 border-black relative">
                                        <div className="w-2 h-2 bg-black rounded-full absolute bottom-0 left-0"></div>
                                      </div>
                                    </div>
                                    
                                    {/* Nose */}
                                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
                                      <div className="w-5 h-5 bg-red-500 rounded-full border-1 border-black"></div>
                                    </div>
                                    
                                    {/* Mouth */}
                                    <div className="w-18 h-7 border-2 border-black border-t-0 rounded-b-full absolute top-16 left-1/2 transform -translate-x-1/2"></div>
                                  </div>
                                </motion.div>
                                
                                {/* Door knob */}
                                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                  <div className="w-4 h-4 rounded-full bg-yellow-500 border border-yellow-800"></div>
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        )}
                        
                        {gadget.id === 'timeShift' && (
                          <div className="relative">
                            {/* Time Shifter Cartoon Image */}
                            <motion.div 
                              className="relative"
                              animate={{ y: [0, -5, 0] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                            >
                              {/* Doraemon with Time Shifter */}
                              <div className="w-36 h-36 bg-blue-400 rounded-full relative border-2 border-black">
                                {/* Face */}
                                <div className="w-32 h-24 bg-white rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
                                
                                {/* Eyes */}
                                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex space-x-8">
                                  <div className="w-8 h-8 bg-white rounded-full border-2 border-black relative">
                                    <div className="w-3 h-3 bg-black rounded-full absolute bottom-1 right-1"></div>
                                  </div>
                                  <div className="w-8 h-8 bg-white rounded-full border-2 border-black relative">
                                    <div className="w-3 h-3 bg-black rounded-full absolute bottom-1 left-1"></div>
                                  </div>
                                </div>
                                
                                {/* Nose */}
                                <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                                  <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-black"></div>
                                </div>
                                
                                {/* Mouth */}
                                <div className="w-24 h-10 border-2 border-black border-t-0 rounded-b-full absolute top-22 left-1/2 transform -translate-x-1/2"></div>
                                
                                {/* Time Shifter in hands */}
                                <motion.div 
                                  className="absolute top-40 left-1/2 transform -translate-x-1/2"
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                >
                                  <div className="w-16 h-16 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                                    <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center">
                                      <div className="w-5 h-5 bg-purple-700 rounded-full"></div>
                                    </div>
                                  </div>
                                </motion.div>
                              </div>
                            </motion.div>
                          </div>
                        )}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-center text-blue-700 mb-2">{gadget.name}</h3>
                    <p className="text-gray-600 text-center mb-6">
                      {gadget.description}
                    </p>
                    <div className="flex justify-center">
                      <Button onClick={() => setShowGadget(gadget.id)}>Try it out!</Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Gadget Animation Overlay */}
        <AnimatePresence>
          {showGadget && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowGadget(null)}
            >
              <div onClick={e => e.stopPropagation()}>
                {gadgets.find(g => g.id === showGadget)?.animation}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Flying Doraemon */}
        <AnimatePresence>
          {isFlying && (
            <motion.div 
              className="fixed z-40"
              initial={{ x: -100, y: window.innerHeight / 2 }}
              animate={{ 
                x: window.innerWidth + 100,
                y: [window.innerHeight / 2, window.innerHeight / 3, window.innerHeight / 2],
              }}
              exit={{ x: window.innerWidth + 200, opacity: 0 }}
              transition={{ duration: 10, ease: "easeInOut", y: { repeat: Infinity, duration: 3 } }}
            >
              <Doraemon className="scale-50" />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Magic Gadget Button */}
      <Gadget onClick={() => setShowGadget(gadgets[Math.floor(Math.random() * gadgets.length)].id)} />

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 text-center z-20">
        <p>&copy; {new Date().getFullYear()} Doraemon World - Created by MGX</p>
      </footer>
    </div>
  );
}