import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.gray200};
  height: 235px;
  width: 100%;
`;

export const LocationList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

export const FloatingButton = styled.button`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  border: none;
  border-radius: 50%;
  padding: 12px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${props => props.theme.primaryDark};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
