'use client'

import { BLogo } from '../components/svg/BLogo';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { AllServicesSection } from '../components/AllServicesSection';
import { FaGem, FaDatabase, FaServer, FaCog, FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

export default function IBuildRorApps() {

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
              Ruby on Rails developer with a passion for building robust, scalable web applications.
            </p>
            <div className="flex justify-between text-2xl w-[200px] mx-auto">
              <span className="icon-ruby text-[#CC342D]">
                <FaGem aria-hidden />
              </span>
              <span className="icon-database text-[#336791]">
                <FaDatabase aria-hidden />
              </span>
              <span className="icon-server text-[#FF6B35]">
                <FaServer aria-hidden />
              </span>
              <span className="icon-cog text-[#754C24]">
                <FaCog aria-hidden />
              </span>
            </div>
          </div>
        </section>

        <ScrollAnimation direction="up" delay={0.1}>
          <section className="max-w-2xl mx-auto pb-20">
            <ScrollAnimation direction="fade" delay={0.15}>
              <h2 className="text-4xl lg:text-center mb-8 text-glow text-shadow-white">Don't let your <strong>Ruby on Rails application</strong> become a bottleneck for your business growth.</h2>
            </ScrollAnimation>

            <div className="max-w-sm lg:mx-auto">
              <ScrollAnimation direction="up" delay={0.2}>
                <h3 className="text-lg mb-4">Common Rails application challenges:</h3>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.25}>
                <ul className="list-disc list-inside ml-2 mb-8">
                  <li>Slow database queries and N+1 problems</li>
                  <li>Poorly structured models and business logic</li>
                  <li>Inadequate testing coverage</li>
                  <li>Security vulnerabilities</li>
                  <li>Performance bottlenecks at scale</li>
                  <li>Technical debt accumulation</li>
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
                I'm always looking for new ways to improve my Rails expertise. If you have any questions about Ruby on Rails development or need help with your application, feel free to reach out using any of the methods below.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.45}>
              <div className="lg:max-w-sm mx-auto flex flex-wrap lg:justify-center gap-4 mb-8">
                <ScrollAnimation direction="left" delay={0.5}>
                  <a href="mailto:benjamin.scottt.dev+portfolio@gmail.com?subject=Ruby on Rails inquiry" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
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
                <em>Build Rails applications that scale with confidence.</em>
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
            <a href="mailto:benjamin.scottt.dev+portfolio@gmail.com?subject=Ruby on Rails inquiry" className="hover:text-blue-400 transition-colors">
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

        @keyframes explode-ruby-icon {
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

        @keyframes explode-database-icon {
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

        @keyframes explode-server-icon {
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

        @keyframes explode-cog-icon {
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

        @keyframes dance-ruby-icon {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes dance-database-icon {
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

        @keyframes dance-server-icon {
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

        @keyframes dance-cog-icon {
          0% {
            color: #754C24;
          }
          50% {
            color: #8B4513;
          }
          100% {
            color: #754C24;
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

        .icon-ruby {
          animation: dance-ruby-icon 8s 7s linear infinite;
        }

        .icon-database {
          animation: dance-database-icon 2s 7s ease infinite;
        }

        .icon-server {
          animation: dance-server-icon 3s 7s ease infinite;
        }

        .icon-cog {
          animation: dance-cog-icon 4s 7s ease infinite;
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
