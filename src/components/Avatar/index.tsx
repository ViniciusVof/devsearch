import { AvatarImage } from './style';

interface AvatarProps {
  image: string;
  size: string;
}

Avatar.defaultProps = {
  size: '48px',
};

export function Avatar({ image, size }: AvatarProps) {
  return <AvatarImage src={image} size={size} />;
}
