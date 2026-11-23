'use client'

import Link from 'next/link'
import { FaCode, FaJsSquare, FaPython, FaReact } from 'react-icons/fa'

import CircuitBackground from './components/CircuitBackground'
import GlitchName from './components/GlitchName'
import { ScrollAnimation } from './components/ScrollAnimation'
import { ContactPills, SocialStrip } from './components/SocialLinks'
import { BLogo } from './components/svg/BLogo'

interface IServiceCard {
  href: string
  num: string
  title: string
  description: string
}

const services: IServiceCard[] = [
  {
    href: '/i-build-websites',
    num: '[01]',
    title: 'Modern Websites',
    description: 'Fast, responsive, and user-friendly websites that convert visitors into customers.',
  },
  {
    href: '/i-build-ror-apps',
    num: '[02]',
    title: 'Ruby on Rails Applications',
    description: 'Scalable, maintainable Rails applications built with best practices.',
  },
  {
    href: '/i-am-a-software-developer',
    num: '[03]',
    title: 'Custom Software Solutions',
    description: 'Tailored software development to solve your unique business challenges.',
  },
  {
    href: '/i-am-an-ai-software-developer',
    num: '[04]',
    title: 'AI & Machine Learning',
    description: 'Intelligent systems and ML models that transform data into actionable insights.',
  },
]

export default function Home() {
  return (
    <>
      <CircuitBackground />
      <main className="bs-content bs-wrap">
        <section className="bs-hero" aria-labelledby="name">
          <span className="bs-logo" aria-hidden="true">
            <BLogo fill="currentColor" width="58" height="127" />
          </span>
          <GlitchName text="Benjamin Scott" />
          <p className="bs-pitch">
            Building <strong>exceptional software</strong> that solves real problems and delivers value.
          </p>
          <p className="bs-tagline">
            Software engineer passionate about building exceptional digital experiences.
          </p>
          <ul className="bs-tech" aria-label="React, JavaScript, code, Python">
            <li className="icon-react text-[#61dbfb]">
              <FaReact aria-hidden />
            </li>
            <li className="icon-js text-[#f0db4f]">
              <FaJsSquare aria-hidden />
            </li>
            <li className="icon-code text-white">
              <FaCode aria-hidden />
            </li>
            <li className="icon-py text-[#306998]">
              <FaPython aria-hidden />
            </li>
          </ul>
          <a className="bs-cue" href="#build">
            What I can help you build <span className="bs-cue-arrow" aria-hidden="true">↓</span>
          </a>
        </section>

        <ScrollAnimation direction="up" delay={0.1}>
          <section className="bs-sec" id="build" aria-labelledby="bh">
            <ScrollAnimation direction="fade" delay={0.15}>
              <div className="bs-sec-head">
                <span className="bs-sec-idx" aria-hidden="true">01 //</span>
                <h2 id="bh">What I can help you build</h2>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.25}>
              <div className="bs-cards">
                {services.map((service) => (
                  <Link key={service.href} className="bs-card" href={service.href}>
                    <span className="bs-card-num" aria-hidden="true">{service.num}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="bs-card-more" aria-hidden="true">
                      Learn more <span>→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </ScrollAnimation>
          </section>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.3}>
          <section className="bs-sec" aria-labelledby="ch">
            <ScrollAnimation direction="fade" delay={0.35}>
              <div className="bs-sec-head">
                <span className="bs-sec-idx" aria-hidden="true">02 //</span>
                <h2 id="ch">Ways to Get in Touch</h2>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.4}>
              <p className="bs-lead">
                I&apos;m always excited to work on new projects and solve interesting problems. Whether you need a new website, a Rails application, or custom software development, I&apos;d love to hear about your project.
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.45}>
              <ContactPills />
            </ScrollAnimation>

            <ScrollAnimation direction="fade" delay={0.7} margin="0px 0px 120px 0px">
              <p className="bs-closer">
                <em>Let&apos;s build something exceptional together.</em>
                <span className="bs-caret" aria-hidden="true" />
              </p>
            </ScrollAnimation>
          </section>
        </ScrollAnimation>
      </main>
      <SocialStrip />

      <style jsx>{`
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

        @media (prefers-reduced-motion: reduce) {
          .icon-react,
          .icon-js,
          .icon-code,
          .icon-py {
            animation: none;
          }
        }
      `}</style>
    </>
  )
}
