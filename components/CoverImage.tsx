import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

interface ICoverImageProps {
  title: string;
  src: string;
  slug?: string;
  height: number;
  width: number;
}

export const CoverImage = ({
  title,
  src,
  slug,
  height,
  width,
}: ICoverImageProps) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
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
