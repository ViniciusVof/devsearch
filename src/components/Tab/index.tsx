import React, {
  ReactElement,
  ReactNode,
  memo,
  useEffect,
  useState,
} from 'react';
import * as S from './styles';

interface TabProps {
  children?: ReactNode;
  onTabSelected?: Function;
}

interface TabItemProps {
  children?: ReactNode;
  selected?: boolean;
}

interface TabPanelProps {
  children?: ReactNode;
}

export function Tab({ children, onTabSelected }: TabProps) {
  const [itemId, setItemId] = useState(0);

  useEffect(() => {
    onTabSelected && onTabSelected(itemId);
  }, [itemId, onTabSelected]);

  return (
    <S.TabContainer>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child as ReactElement, {
          onClick: () => {
            setItemId(index);
          },
          selected: itemId === index,
        });
      })}
    </S.TabContainer>
  );
}

export const TabItem = memo(({ children, ...restProps }: TabItemProps) => (
  <S.TabItem {...restProps}>{children}</S.TabItem>
));

export function TabPanel({ children }: TabPanelProps) {
  return <S.TabPanel>{children}</S.TabPanel>;
}
