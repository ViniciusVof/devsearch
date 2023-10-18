import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.gray100};
`;
