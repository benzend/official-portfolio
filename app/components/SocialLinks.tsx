import type { IconType } from 'react-icons'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

const MAIL = 'mailto:benjamin.scottt.dev+portfolio@gmail.com?subject=Hello from your portfolio'

interface IContactLink {
  href: string
  label: string
  Icon: IconType
}

const contactLinks: IContactLink[] = [
  { href: MAIL, label: 'Email', Icon: FaEnvelope },
  { href: 'https://www.linkedin.com/in/benjamin-scottt', label: 'LinkedIn', Icon: FaLinkedin },
  { href: 'https://github.com/benzend', label: 'GitHub', Icon: FaGithub },
  { href: 'https://x.com/TheBenzend', label: 'Twitter', Icon: FaTwitter },
]

/** Contact buttons. Visible labels, 46px targets. */
export function ContactPills() {
  return (
    <div className="bs-pills">
      {contactLinks.map(({ href, label, Icon }) => (
        <a key={label} className="bs-pill" href={href}>
          <Icon aria-hidden />
          <span>{label}</span>
        </a>
      ))}
    </div>
  )
}

/** Blog and social strip. Fixed gutter pill from 1200px, footer row below that. */
export function SocialStrip() {
  return (
    <footer className="bs-strip" aria-label="Blog and social links">
      <Link href="/blog" className="bs-strip-blog">
        Blog
      </Link>
      <a href="https://github.com/benzend" aria-label="GitHub">
        <FaGithub aria-hidden />
      </a>
      <a href="https://www.linkedin.com/in/benjamin-scottt" aria-label="LinkedIn">
        <FaLinkedin aria-hidden />
      </a>
      <a href="https://x.com/TheBenzend" aria-label="Twitter (X)">
        <FaTwitter aria-hidden />
      </a>
      <a href={MAIL} aria-label="Email">
        <FaEnvelope aria-hidden />
      </a>
    </footer>
  )
}
