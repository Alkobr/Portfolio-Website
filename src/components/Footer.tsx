import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-card border-t">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "100px" }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-xl font-bold text-primary mb-4 md:mb-0">OG</div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              &copy; {currentYear} Osama Ghneem. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Frontend Developer | UI/UX Designer
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}