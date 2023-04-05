import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper'


const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div
            options={
              { 
              max: 45,
              scale: 1,
              speed: 450
              }
            }
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
      Growth-centric, self-driven, and fundamentals-focused software developer determined to add value to a group that highlights building strong foundations, resourcefulness, and collaborative growth. My creative talents, background in psychology, and strong technical knowledge allow me to thrive, while providing support to others in any work environment. My experience in using modern frameworks allows me to provide comprehensive and meaningful solutions to issues that truly help people and businesses.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, idx) => (
          <ServiceCard key={service.title} index={idx} {...service} />
        ))}
      </div>
    </>

  )
}

export default SectionWrapper(About, "about")