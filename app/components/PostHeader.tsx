import { Avatar } from '../components/Avatar';
import { DateFormatter } from '../components/DateFormatter';
import { CoverImage } from '../components/CoverImage';
import { PostTitle } from '../components/PostTitle';

interface PostHeaderProps {
  title: string;
  coverImage?: { url: string; alt?: string };
  date: string;
  author?: { name: string; picture: string };
  readingTime?: string;
}

export const PostHeader = ({ title, coverImage, date, author, readingTime }: PostHeaderProps) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden items-center md:flex md:mb-12">
        {author && <Avatar name={author.name} picture={author.picture} />}
        {readingTime && (
          <span className="ml-3 text-sm opacity-75">
            {readingTime}
          </span>
        )}

      </div>

      <div className="mb-8 md:mb-16 sm:mx-0">
        {coverImage && <CoverImage title={title} src={coverImage.url} alt={coverImage.alt || ''} height={620} width={1240} />}
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-6 text-lg md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
          {readingTime && (
            <span className="ml-3 text-sm opacity-75 md:hidden">
              {readingTime}
            </span>
          )}
        </div>
      </div>
    </>
  );
};
