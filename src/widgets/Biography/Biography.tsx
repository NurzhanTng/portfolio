import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import profilePic from '@images/developer.jpg';
import { AnimatedText } from '@/shared/ui/AnimatedText';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 3000,
  });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed() <= value) {
        ref.current.textContent = latest.toFixed();
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export const Biography = () => {
  return (
    <>
      <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
      <div className="grid w-full grid-cols-8 gap-16 ">
        <div className="col-span-3 flex flex-col items-start justify-start">
          <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
            Biography
          </h2>

          <p className="font-medium">
            Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion
            for creating beautiful, functional, and user-centered digital
            experiences. With 4 years of experience in the field. I am always
            looking for new and innovative ways to bring my clients' visions to
            life.
          </p>

          <p className="my-4 font-medium">
            I believe that design is about more than just making things look
            pretty – it's about solving problems and creating intuitive,
            enjoyable experiences for users.
          </p>

          <p className="font-medium">
            Whether I'm working on a website, mobile app, or other digital
            product, I bring my commitment to design excellence and
            user-centered thinking to every project I work on. I look forward to
            the opportunity to bring my skills and passion to your next project.
          </p>
        </div>

        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
          <img
            src={profilePic}
            alt="Nurzhan Tangatarov w-full "
            className="w-full h-auto rounded-2xl"
          />
        </div>

        <div className="col-span-2 flex flex-col items-end justify-between">
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">
              <AnimatedNumbers value={50} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75">
              satisfied clients
            </h2>
          </div>

          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">
              <AnimatedNumbers value={40} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75">
              projects completed
            </h2>
          </div>

          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">
              <AnimatedNumbers value={4} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75">
              years of experience
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
