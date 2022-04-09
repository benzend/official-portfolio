import markdownStyles from '../styles/markdown-styles.module.scss';

interface IPostBodyProps {
  content: string;
}

export const PostBody = ({ content }: IPostBodyProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
