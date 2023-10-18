import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  padding: 32px 48px;
`;

export const TabsContent = styled.div`
  display: flex;
  justify-self: flex-end;
  background-color: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.gray200};
`;
