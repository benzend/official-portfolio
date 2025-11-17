'use client'

import { BLogo } from '../components/svg/BLogo';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { AllServicesSection } from '../components/AllServicesSection';
import { FaReact, FaJsSquare, FaCode, FaPython, FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';



export default function IAmASoftwareDeveloper() {

  return (
    <div className="min-h-screen max-w-screen">
      <main className="h-full px-6">
        <section className="relative pt-[40vh] pb-[17vh]">
          <div className="hero-logo absolute top-[30vh] left-1/2 -translate-x-1/2 -z-1">
            <BLogo fill="#383838" height="500px" width="500px" />
          </div>

          <div className="relative z-10">
            <h1 className="main-title text-3xl md:text-6xl uppercase text-center mb-[8vh]">
              Benjamin Scott
            </h1>
            <p className="sub-header text-sm lg:text-center text-gray-400 mb-3 max-w-sm mx-auto">
              Full-stack software developer dedicated to crafting elegant solutions to complex problems.
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

        <ScrollAnimation direction="up" delay={0.1}>
          <section className="max-w-2xl mx-auto pb-20">
            <ScrollAnimation direction="fade" delay={0.15}>
              <h2 className="text-4xl lg:text-center mb-8 text-glow text-shadow-white">Don't let <strong>technical debt</strong> and poor architecture hold your software back from reaching its full potential.</h2>
            </ScrollAnimation>

            <div className="max-w-sm lg:mx-auto">
              <ScrollAnimation direction="up" delay={0.2}>
                <h3 className="text-lg mb-4">Signs your software needs attention:</h3>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.25}>
                <ul className="list-disc list-inside ml-2 mb-8">
                  <li>Code is difficult to maintain and extend</li>
                  <li>Frequent bugs in production</li>
                  <li>Poor test coverage or no tests at all</li>
                  <li>Slow development cycles</li>
                  <li>Performance issues and bottlenecks</li>
                  <li>Lack of proper documentation</li>
                </ul>
              </ScrollAnimation>
            </div>

          </section>
        </ScrollAnimation>

        <AllServicesSection />

        <ScrollAnimation direction="up" delay={0.3}>
          <section className="max-w-2xl mx-auto pb-20">
            <ScrollAnimation direction="fade" delay={0.35}>
              <h2 className="text-2xl font-bold lg:text-center mb-8">Ways to Get in Touch</h2>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.4}>
              <p className="lg:text-center mb-8 text-glow">
                I'm always passionate about software development best practices and clean code principles. If you're looking for a software developer or need technical consultation, I'd love to connect using any of the methods below.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.45}>
              <div className="lg:max-w-sm mx-auto flex flex-wrap lg:justify-center gap-4 mb-8">
                <ScrollAnimation direction="left" delay={0.5}>
                  <a href="mailto:benjamin.scottt.dev+portfolio@gmail.com?subject=Software development inquiry" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <FaEnvelope aria-hidden />
                    <span>Email</span>
                  </a>
                </ScrollAnimation>
                <ScrollAnimation direction="left" delay={0.55}>
                  <a href="https://www.linkedin.com/in/benjamin-scottt" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <FaLinkedin aria-hidden />
                    <span>LinkedIn</span>
                  </a>
                </ScrollAnimation>
                <ScrollAnimation direction="left" delay={0.6}>
                  <a href="https://github.com/benzend" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <FaGithub aria-hidden />
                    <span>GitHub</span>
                  </a>
                </ScrollAnimation>
                <ScrollAnimation direction="left" delay={0.65}>
                  <a href="https://x.com/TheBenzend" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <FaTwitter aria-hidden />
                    <span>Twitter</span>
                  </a>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="fade" delay={0.7}>
              <p className="lg:text-center text-glow text-xl mx-auto font-bold">
                <em>Build software with confidence.</em>
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
            <a href="mailto:benjamin.scottt.dev+portfolio@gmail.com?subject=Software development inquiry" className="hover:text-blue-400 transition-colors">
              <FaEnvelope aria-hidden />
            </a>
          </section>
        </footer>
      </main>

      <style jsx>{`
        @keyframes insert-hero-logo {
          0% {
            opacity: 0;
            top: -100vh;
          }
          100% {
            opacity: 1;
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
          opacity: 1;
        }

        .main-title {
          opacity: 1;
        }

        .sub-header {
          opacity: 1;
        }

        .icon-react {
          animation: dance-react-icon 8s 7s linear infinite;
        }

        .icon-js {
          animation: dance-js-icon 2s 7s ease infinite;
        }

        .icon-code {
          animation: dance-code-icon 3s 7s ease infinite;
        }

        .icon-py {
          animation: dance-py-icon 4s 7s ease infinite;
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
