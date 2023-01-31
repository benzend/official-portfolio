import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

interface ICoverImageProps {
  title: string;
  src: string;
  slug?: string;
  height: number;
  width: number;
  alt: string;
}

export const CoverImage = ({
  title,
  src,
  slug,
  height,
  width,
  alt
}: ICoverImageProps) => {
  const image = (
    <Image
      src={src}
      alt={alt}
      className={cn('shadow-sm', {
        'hover:shadow-md transition-shadow duration-200': slug,
      })}
      layout="responsive"
      width={width}
      height={height}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};
