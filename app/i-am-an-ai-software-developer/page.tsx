'use client'

import { BLogo } from '../components/svg/BLogo';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { AllServicesSection } from '../components/AllServicesSection';
import { FaRobot, FaBrain, FaCode, FaMicrochip, FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

export default function IAmAnAISoftwareDeveloper() {

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
              AI software developer with a passion for building intelligent systems that solve real-world problems.
            </p>
            <div className="flex justify-between text-2xl w-[200px] mx-auto">
              <span className="icon-robot text-[#00BCD4]">
                <FaRobot aria-hidden />
              </span>
              <span className="icon-brain text-[#9C27B0]">
                <FaBrain aria-hidden />
              </span>
              <span className="icon-code text-[#4CAF50]">
                <FaCode aria-hidden />
              </span>
              <span className="icon-chip text-[#FF9800]">
                <FaMicrochip aria-hidden />
              </span>
            </div>
          </div>
        </section>

        <ScrollAnimation direction="up" delay={0.1}>
          <section className="max-w-2xl mx-auto pb-20">
            <ScrollAnimation direction="fade" delay={0.15}>
              <h2 className="text-4xl lg:text-center mb-8 text-glow text-shadow-white">Don't let your <strong>AI project</strong> fail due to poor implementation and lack of expertise.</h2>
            </ScrollAnimation>

            <div className="max-w-sm lg:mx-auto">
              <ScrollAnimation direction="up" delay={0.2}>
                <h3 className="text-lg mb-4">Common AI project challenges:</h3>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.25}>
                <ul className="list-disc list-inside ml-2 mb-8">
                  <li>Poor data quality and preprocessing</li>
                  <li>Overfitting and model selection issues</li>
                  <li>Scalability and performance bottlenecks</li>
                  <li>Lack of model interpretability</li>
                  <li>Ethical considerations and bias</li>
                  <li>Integration with existing systems</li>
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
                I'm passionate about pushing the boundaries of what's possible with AI. If you have questions about machine learning, need help with an AI project, or want to discuss how intelligent systems can transform your business, I'd love to hear from you.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.45}>
              <div className="lg:max-w-sm mx-auto flex flex-wrap lg:justify-center gap-4 mb-8">
                <ScrollAnimation direction="left" delay={0.5}>
                  <a href="mailto:benjamin.scottt.dev+portfolio@gmail.com?subject=AI Development inquiry" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
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
                <em>Build AI solutions that deliver real business value.</em>
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
            <a href="mailto:benjamin.scottt.dev+portfolio@gmail.com?subject=AI Development inquiry" className="hover:text-blue-400 transition-colors">
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

        @keyframes explode-robot-icon {
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

        @keyframes explode-brain-icon {
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

        @keyframes explode-chip-icon {
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

        @keyframes dance-robot-icon {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-10deg);
          }
          75% {
            transform: rotate(10deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        @keyframes dance-brain-icon {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes dance-code-icon {
          0% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-5px);
          }
          75% {
            transform: translateY(5px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes dance-chip-icon {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
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

        .icon-robot {
          animation: dance-robot-icon 4s 7s ease infinite;
        }

        .icon-brain {
          animation: dance-brain-icon 2s 7s ease infinite;
        }

        .icon-code {
          animation: dance-code-icon 3s 7s ease infinite;
        }

        .icon-chip {
          animation: dance-chip-icon 8s 7s linear infinite;
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