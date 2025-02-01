import { motion, useScroll } from 'framer-motion';

export const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['start end', 'center center'],
  });

  return (
    <figure className="absolute -left-[35px] stroke-dark">
      <svg className="" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light"
          style={{
            pathLength: scrollYProgress,
          }}
          strokeWidth="5"
          strokeLinecap="round"
          fill="transparent"
        />
        <circle
          cx="50"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-primary"
        />
      </svg>
    </figure>
  );
};
