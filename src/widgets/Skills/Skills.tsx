import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center cursor-pointer rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark absolute"
      whileHover={{
        scale: 1.05,
      }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <>
      <h2 className="font bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-[50%] bg-circular-light">
        <Skill name="Web" x="0" y="0" />
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NestJs" x="-20vw" y="-15vw" />
        <Skill name="Web Design" x="15vw" y="-12vw" />
        <Skill name="Figma" x="32vw" y="-5vw" />
        <Skill name="Firebase" x="-20vw" y="16vw" />
        <Skill name="Tailwind CSS" x="18vw" y="18vw" />
      </div>
    </>
  );
};
