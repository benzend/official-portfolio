import Image from 'next/image';
import { CSSProperties } from 'react';

interface IAvatarProps {
  name: string;
  picture: string;
  customStyles?: {
    picture?: CSSProperties;
    name?: CSSProperties;
  };
}
export const Avatar = ({
  name,
  picture,
  customStyles = { picture: {}, name: {} },
}: IAvatarProps) => {
  return (
    <div className="flex items-center">
      <div style={customStyles.picture}>
        <Image
          src={picture}
          width={customStyles.picture.width || 48}
          height={customStyles.picture.height || 48}
          className="w-12 h-12 rounded-full mr-4"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold" style={customStyles.name}>
        {name}
      </div>
    </div>
  );
};
