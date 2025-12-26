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
    <div className="flex items-center gap-2">
      <div 
        className="rounded-full overflow-hidden"
        style={{
          width: typeof customStyles.picture?.width === 'number' ? customStyles.picture.width : 48,
          height: typeof customStyles.picture?.height === 'number' ? customStyles.picture.height : 48,
          marginRight: '1rem',
          ...customStyles.picture
        }}
      >
        <Image
          src={picture}
          width={typeof customStyles.picture?.width === 'number' ? customStyles.picture.width : 48}
          height={typeof customStyles.picture?.height === 'number' ? customStyles.picture.height : 48}
          className="w-full h-full object-cover"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold" style={customStyles.name}>
        {name}
      </div>
    </div>
  );
};
