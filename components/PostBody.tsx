interface IPostBodyProps {
  content: string;
}

export const PostBody = ({ content }: IPostBodyProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};
