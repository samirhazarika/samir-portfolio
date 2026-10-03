import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Modern Tech
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Development.
        </h2>
      </motion.div>

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 gap-7'>
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.title}
            variants={textVariant(index * 0.15)}
            className='bg-[#1d1836] border border-white/10 rounded-2xl p-8 shadow-card'
          >
            <h3 className='text-white text-[24px] font-bold'>
              {experience.title}
            </h3>
            <p className='mt-3 text-secondary text-[16px] leading-7'>
              {experience.description}
            </p>
          </motion.article>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
