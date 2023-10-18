import styled from 'styled-components';

interface TabItemProps {
  selected?: boolean;
}

export const TabContainer = styled.div`
  height: fit-content;
  display: flex;
  align-items: stretch;
`;

export const TabItem = styled.div<TabItemProps>`
  background-color: white;
  padding: 12px 0px;
  margin: 0px 24px;
  cursor: pointer;
  transition: 0.3s;
  color: ${props => (props.selected ? props.theme.black : props.theme.gray300)};
  border-bottom: 5px solid
    ${props => (props.selected ? props.theme.primary : 'transparent')};
  &:first-child {
    margin-left: 48px;
  }
`;

export const TabPanel = styled.div`
  padding: 48px;
`;
