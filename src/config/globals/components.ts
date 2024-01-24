import styled from 'styled-components';

export const Input = styled.input`
  padding: 8px;
  margin: 8px 0;
  border: 1px solid ${props => props.theme.gray200};
  border-radius: 4px;
  width: 100%;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  padding: 12px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darken(${props => props.theme.primary}, 10%);
  }
`;
