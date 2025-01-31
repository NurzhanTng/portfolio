import { NavBar } from '@/widgets/NavBar';
import { Layout } from '@/widgets/Layout';
import profilePic from '@images/guy.png';
import { AnimatedText } from '@/shared/ui/AnimatedText';
import { Link } from 'react-router-dom';
import { LinkArrow } from '@/shared/ui/Icon/Icon.tsx';
import { Footer } from '@/widgets/Footer';
import { HireMe } from '@/shared/ui/HireMe';

export const Home = () => {
  return (
    <div className="bg-light">
      <NavBar />
      <main>
        <Layout className="flex items-center text-dark w-full h-[calc(100vh-1084px)] py-10">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <img
                src={profilePic}
                alt="Profile Photo"
                className="w-[80%] h-auto"
              />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>

              <div className="flex items-center self-start mt-2">
                <Link
                  to="/dummy.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-solid border-transparent hover:border-dark border-2"
                  download={true}
                >
                  Resume
                  <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  to="mailto:tangatarovnurzan@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <Footer />
      </main>
    </div>
  );
};
