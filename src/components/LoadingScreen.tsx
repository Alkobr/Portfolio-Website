import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="mx-auto mb-6 h-16 w-16 rounded-full border-4 border-t-primary"
        />
        <h1 className="text-4xl font-bold text-primary">Osama Ghneem</h1>
        <p className="text-xl text-muted-foreground">Front End Developer</p>
      </motion.div>
    </div>
  );
}