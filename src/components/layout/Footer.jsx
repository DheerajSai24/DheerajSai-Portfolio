import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer__content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="footer__text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="footer__name">Dheeraj Sai</span>
            <span className="footer__separator">|</span>
            <span>© {new Date().getFullYear()}</span>
            <span className="footer__separator">|</span>
            <span className="footer__description">Aspiring Data Scientist & MERN Stack Developer</span>
            <span className="footer__separator">|</span>
            <span>Built with</span>
            <motion.span 
              className="footer__heart"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              ❤️
            </motion.span>
            <span>using React</span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
