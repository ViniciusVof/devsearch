import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  border-bottom: 1px solid ${props => props.theme.gray200};
  border-right: 1px solid ${props => props.theme.gray200};
  margin-bottom: 24px;
`;

export const MenuList = styled.ul`
  width: 80px;
  height: 100vh;
  background-color: ${props => props.theme.white};
  border-right: 1px solid ${props => props.theme.gray200};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const MenuLabel = styled.span`
  display: block;
  margin-left: 15px;
  color: ${props => props.theme.white};
  opacity: 0;
  transition: opacity 500ms;
`;

export const MenuItem = styled.li`
  display: flex;
  padding-left: calc(80px / 3);
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  border-radius: 0px 6px 6px 0px;
  transition: padding 500ms;
  z-index: 1;
  cursor: pointer;
  &:hover {
    padding-right: 40px;
    background-color: ${props => props.theme.primary};
    .icon {
      fill: ${props => props.theme.white};
    }
    ${MenuLabel} {
      opacity: 1;
      display: block;
    }
  }
`;
