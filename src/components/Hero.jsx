import { motion } from "framer-motion";
import { styles } from "../styles";   

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#798af6]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            😁 I'm <span className='text-[#FFE578]'>Daevah</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Your friendly neighborhood developer <br className='sm:block hidden' />
          </p>
          <div className="flex flex-">
            <a target="blank" href="https://docs.google.com/document/d/1fqbopFmwMfaLzlY9M1iQ0sRHacmVgY4hnjsT8WR5Ap0/edit?usp=sharing" className="links"> View my Resume </a>    
            <a target="blank" href="https://www.linkedin.com/in/d-tayl/" className="links"> LinkedIn </a>    
            <a target="blank" href="https://github.com/dmt94" className="links"> Github </a>    
          </div>
            
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;