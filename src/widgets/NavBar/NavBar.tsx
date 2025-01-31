import { Link, useLocation } from 'react-router-dom';
import { Logo } from '@/shared/ui/Logo';
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from '@/shared/ui/Icon/Icon.tsx';
import { motion } from 'framer-motion';

const CustomLink = ({ to, className = '', children }) => {
  const location = useLocation();

  return (
    <Link to={to} className={`${className} relative group`}>
      {children}
      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${location.pathname === to ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink to="/" className="mr-4">
          Home
        </CustomLink>
        <CustomLink to="/about" className="mx-4">
          About
        </CustomLink>
        <CustomLink to="/projects" className="mx-4">
          Projects
        </CustomLink>
        <CustomLink to="/acticles" className="ml-4">
          Articles
        </CustomLink>
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://twitter.com"
          target="_blank"
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="w-6 mr-3"
        >
          <TwitterIcon />
        </motion.a>

        <motion.a
          href="https://github.com"
          target="_blank"
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>

        <motion.a
          href="https://linkedin.com"
          target="_blank"
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>

        <motion.a
          href="https://pinterest.com"
          target="_blank"
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="w-6 mx-3"
        >
          <PinterestIcon />
        </motion.a>

        <motion.a
          href="https://dribble.com"
          target="_blank"
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="w-6 ml-3"
        >
          <DribbbleIcon />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};
