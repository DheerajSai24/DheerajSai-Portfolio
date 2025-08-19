import { motion } from 'framer-motion';
import './AboutSection.css';
import profileImage from '../../assets/WhatsApp Image 2025-08-18 at 11.15.34 PM.jpeg';

const AboutSection = () => {
  const stats = [
    { number: '4+', label: 'Years of Learning' },
    { number: '10+', label: 'Projects Built' },
    { number: '3', label: 'Tech Domains' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__content">
          {/* Image Section */}
          <motion.div 
            className="about__image-container"
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <motion.div 
              className="about__image-wrapper"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <motion.div 
                className="about__image-blob"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.img 
                src={profileImage}
                alt="Dheeraj Sai"
                className="about__image"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="about__text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2
            }}
          >
            <h2>About Me</h2>
            <div className="about__line"></div>
            <p>
              I'm an aspiring Data Scientist and MERN Stack Developer from India. Currently pursuing my B.Tech 
              in Computer Science Engineering at Vaagdevi College of Engineering. My journey includes working 
              on AI-powered projects, full-stack web applications, and real-time systems that solve practical problems.
            </p>

            {/* Stats */}
            <div className="about__stats">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="stat-card__number">{stat.number}</div>
                  <div className="stat-card__label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
