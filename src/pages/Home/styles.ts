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
