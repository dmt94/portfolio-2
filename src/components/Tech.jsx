import React from "react";
import {styles} from '../styles';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/index";

const Tech = () => {
  return (
    <>
      <h3 className={styles.sectionSubText}>Technologies I work with:</h3>
      <div className='flex flex-row flex-wrap justify-center gap-10'>        
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <span>{technology.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");