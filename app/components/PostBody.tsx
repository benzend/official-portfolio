interface IPostBodyProps {
  content: string;
}

export const PostBody = ({ content }: IPostBodyProps) => {
  const formatMarkdown = (text: string): string => {
    return text
      .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mt-8 mb-4">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mt-8 mb-4">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mt-8 mb-4">$1</h1>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/^---$/gim, '<hr class="my-8 border-gray-300" />')
      .replace(/```([^`]+)```/gim, '<pre class="bg-gray-100 p-4 rounded-md overflow-x-auto my-4"><code>$1</code></pre>')
      .replace(/`([^`]+)`/gim, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">$1</code>')
      .replace(/^- (.*$)/gim, '<li class="ml-4">$1</li>')
      .replace(/(<li[\s\S]*?<\/li>)/g, '<ul class="list-disc my-4">$1</ul>')
      .replace(/^\d+\. (.*$)/gim, '<li class="ml-4">$1</li>')
      .replace(/\n\n/gim, '</p><p class="my-4">')
      .replace(/^(.+)$/gm, '<p class="my-4">$1</p>')
      .replace(/<p class="my-4"><\/p>/gim, '')
      .replace(/<p class="my-4">(##|###|#)/gim, '$1')
      .replace(/<p class="my-4">(###|##|#.*)<\/p>/gim, '$1')
      .replace(/<p class="my-4">(.*)(<\/(h[1-6]|pre|ul|li)>)/gim, '$1$2')
      .replace(/<(h[1-6]|pre|ul|li)>.*<\/p>/gim, '<$1>')
      .replace(/<p class="my-4">(\s*)/gim, '<p class="my-4">')
      .replace(/(\s*)<\/p>/gim, '</p>');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: formatMarkdown(content) }}
      />
    </div>
  );
};
