import Image from 'next/image';

interface IAvatarProps {
  name: string;
  picture: string;
}
export const Avatar = ({ name, picture }: IAvatarProps) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        width={48}
        height={48}
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};
