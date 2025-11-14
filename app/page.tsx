'use client'

import { BLogo } from './components/svg/BLogo';
import { animated, useSpring } from '@react-spring/web';
import { ScrollAnimation } from './components/ScrollAnimation';
import { FaReact, FaJsSquare, FaCode, FaPython, FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

export default function Home() {
  const [props, _api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 }
  }));

  return (
    <div className="min-h-screen">
      <animated.main style={props} className="h-full px-6">
        <section className="relative pt-[40vh] pb-[17vh]">
          <div className="hero-logo absolute top-[30vh] left-1/2 -translate-x-1/2 -z-1">
            <BLogo fill="#383838" height="500px" width="500px" />
          </div>

          <div className="relative z-10">
            <h1 className="main-title text-3xl md:text-6xl uppercase text-center mb-[8vh]">
              Benjamin Scott
            </h1>
            <p className="sub-header text-sm lg:text-center text-gray-400 mb-3 max-w-sm mx-auto">
              Software engineer with a passion for building and maintaining high quality software.
            </p>
            <div className="flex justify-between text-2xl w-[200px] mx-auto">
              <span className="icon-react text-[#61dbfb]">
                <FaReact aria-hidden />
              </span>
              <span className="icon-js text-[#f0db4f]">
                <FaJsSquare aria-hidden />
              </span>
              <span className="icon-code text-white">
                <FaCode aria-hidden />
              </span>
              <span className="icon-py text-[#306998]">
                <FaPython aria-hidden />
              </span>
            </div>
          </div>
        </section>

        <ScrollAnimation direction="up" delay={0.2}>
          <section className="max-w-2xl mx-auto pb-20">
            <ScrollAnimation direction="fade" delay={0.3}>
              <h2 className="text-4xl lg:text-center mb-8 text-glow text-shadow-white">Don't regret losing those <strong>next thousand customers</strong> because of a poorly built website.</h2>
            </ScrollAnimation>

            <div className="max-w-sm lg:mx-auto">
              <ScrollAnimation direction="up" delay={0.4}>
                <h3 className="text-lg mb-4">There are many reasons why a website can fail:</h3>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.5}>
                <ul className="list-disc list-inside ml-2 mb-8">
                  <li>The website is too slow</li>
                  <li>The website is too complex</li>
                  <li>The website is too hard to use</li>
                  <li>The website isn't mobile friendly</li>
                  <li>The website isn't accessible</li>
                  <li>The website has a poor design</li>
                </ul>
              </ScrollAnimation>
            </div>

          </section>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.6}>
          <section className="max-w-2xl mx-auto pb-20">
            <ScrollAnimation direction="fade" delay={0.7}>
              <h2 className="text-2xl font-bold lg:text-center mb-8">Ways to Get in Touch</h2>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.8}>
              <p className="lg:text-center mb-8 text-glow">
                I'm <strong>always</strong> looking for new ways to improve my skills and knowledge. If you have any questions or suggestions, feel free to reach out to me with questions or an inquiry about your site using any of the methods below.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.9}>
              <div className="lg:max-w-sm mx-auto flex flex-wrap lg:justify-center gap-4 mb-8">
                <ScrollAnimation direction="left" delay={1.0}>
                  <a href="mailto:benjamin.scottt.dev+portfolio@gmail.com?subject=Hello from your portfolio" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <FaEnvelope aria-hidden />
                    <span>Email</span>
                  </a>
                </ScrollAnimation>
                <ScrollAnimation direction="left" delay={1.1}>
                  <a href="https://www.linkedin.com/in/benjamin-scottt" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <FaLinkedin aria-hidden />
                    <span>LinkedIn</span>
                  </a>
                </ScrollAnimation>
                <ScrollAnimation direction="left" delay={1.2}>
                  <a href="https://github.com/benzend" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <FaGithub aria-hidden />
                    <span>GitHub</span>
                  </a>
                </ScrollAnimation>
                <ScrollAnimation direction="left" delay={1.3}>
                  <a href="https://x.com/TheBenzend" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <FaTwitter aria-hidden />
                    <span>Twitter</span>
                  </a>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="fade" delay={1.4}>
              <p className="lg:text-center text-glow text-xl mx-auto font-bold">
                <em>Make the choice to build something great.</em>
              </p>
            </ScrollAnimation>
          </section>
        </ScrollAnimation>

        <footer className="flex fixed justify-end mx-auto w-full bottom-0 inset-x-0 mr-2 mb-1">
          <section className="flex gap-2">
            <a href="https://github.com/benzend" className="hover:text-blue-400 transition-colors">
              <FaGithub aria-hidden />
            </a>
            <a href="https://www.linkedin.com/in/benjamin-scottt" className="hover:text-blue-400 transition-colors">
              <FaLinkedin aria-hidden />
            </a>
            <a href="https://x.com/TheBenzend" className="hover:text-blue-400 transition-colors">
              <FaTwitter aria-hidden />
            </a>
            <a href="mailto:benjamin.scottt.dev+portfolio@gmail.com?subject=Hello from your portfolio" className="hover:text-blue-400 transition-colors">
              <FaEnvelope aria-hidden />
            </a>
          </section>
        </footer>
      </animated.main>

      <style jsx>{`
        @keyframes insert-hero-logo {
          0% {
            top: -100vh;
          }
          100% {
            top: 30vh;
          }
        }

        @keyframes explode-main-title {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          90% {
            transform: translate(-300px, -400px) rotate(-200deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }

        @keyframes explode-hero-subTitle {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          90% {
            transform: translate(5px, 80px) rotate(5deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }

        @keyframes explode-react-icon {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          90% {
            transform: translate(-500px, 200px) scale(10);
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
        }

        @keyframes explode-js-icon {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1) rotate(0);
          }
          90% {
            transform: translate(-80px, 300px) scale(0.4) rotate(300deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1) rotate(0);
          }
        }

        @keyframes explode-code-icon {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          90% {
            transform: translate(30px, -400px) scale(10);
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
        }

        @keyframes explode-py-icon {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          90% {
            transform: translate(500px, 400px) scale(20);
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
        }

        @keyframes dance-react-icon {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes dance-js-icon {
          0% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(10deg);
          }
          100% {
            transform: rotate(-10deg);
          }
        }

        @keyframes dance-code-icon {
          0% {
            transform: rotate(0deg);
          }
          3% {
            transform: rotate(5deg);
          }
          6% {
            transform: rotate(-5deg);
          }
          9% {
            transform: rotate(8deg);
          }
          12% {
            transform: rotate(-8deg);
          }
          15% {
            transform: rotate(10deg);
          }
          18% {
            transform: rotate(-10deg);
          }
          21% {
            transform: rotate(8deg);
          }
          23% {
            transform: rotate(-8deg);
          }
          25% {
            transform: rotate(5deg);
          }
          28% {
            transform: rotate(-5deg);
          }
          31% {
            transform: rotate(3deg);
          }
          35% {
            transform: rotate(0deg);
          }
        }

        @keyframes dance-py-icon {
          0% {
            color: #306998;
          }
          50% {
            color: #ffd43b;
          }
          100% {
            color: #306998;
          }
        }

        .hero-logo {
          animation: insert-hero-logo 5s linear forwards;
        }

        .main-title {
          animation: explode-main-title 2s 5s ease-out forwards;
        }

        .sub-header {
          animation: explode-hero-subTitle 2s 5s ease-out forwards;
        }

        .icon-react {
          animation: explode-react-icon 2s 5s ease-out forwards,
            dance-react-icon 8s 7s linear infinite;
        }

        .icon-js {
          animation: explode-js-icon 2s 5s ease-out forwards,
            dance-js-icon 2s 7s ease infinite;
        }

        .icon-code {
          animation: explode-code-icon 2s 5s ease-out forwards,
            dance-code-icon 3s 7s ease infinite;
        }

        .icon-py {
          animation: explode-py-icon 2s 5s ease-out forwards,
            dance-py-icon 4s 7s ease infinite;
        }

        @media screen and (max-width: 500px) {
          .main-title {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  );
}
