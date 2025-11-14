import Image, { ImageProps } from 'next/image';
import { useSpring, animated, UseSpringProps, UseSpringsProps } from '@react-spring/web';

export interface ICardProps {
  children: any,
  className?: string
}

export const Card = ({ children, className }: ICardProps) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  )
}

export interface ICardTitleProps {
  children: any
}
export const CardTitle = ({ children }: ICardTitleProps) => {
  return (
    <div className="card">
      {children}
    </div>
  )
}

export interface ICardImageProps extends ImageProps {
}
export const CardImage = (props: ICardImageProps) => {
  return (
    <div className='relative h-40 max-w-full'>
      <Image src={props.src} alt={props.alt} layout="fill" objectFit="cover" />
    </div>
  )
}

export interface ICardContentProps {
  children: any;
}
export const CardContent = ({ children }: ICardContentProps) => {
  return (
    <div className='p-5 md:p-10'>
      {children}
    </div>
  )
}

export interface ICardAnimateProps {
  children: any,
  hoverAnimation?: 'float'
}
export const CardAnimate = ({ children, hoverAnimation = 'float' }: ICardAnimateProps) => {
  interface Config {
    from: {
      scale?: number,
    },
    to: {
      scale?: number,
    }
  }
  const getConfig = (): Config => {
    switch (hoverAnimation) {
      case 'float':
        return {
          from: { scale: 1 },
          to: { scale: 1.03 }
        }
      default:
        return {
          from: { scale: 1 },
          to: { scale: 1.03 }
        }
    }
  }
  const config = getConfig()
  const [props, api] = useSpring(() => (config.from), [])
  return (
    <animated.div 
      style={props} 
      onMouseEnter={() => api(config.to)}
      onMouseLeave={() => api(config.from)}
      >
      {children}
    </animated.div>
  )
}
