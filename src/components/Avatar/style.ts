import styled from 'styled-components';

interface AvatarProps {
  size: string;
}

export const AvatarImage = styled.img<AvatarProps>`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  object-fit: cover;
`;
