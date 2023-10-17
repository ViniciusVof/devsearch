import { MenuList, MenuItem, MenuLabel, Logo } from './styles';

import { IconContext, Icon } from '@phosphor-icons/react';
import * as Icons from '@phosphor-icons/react';
import { sidebarMenu } from 'config/globals/sidebar';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

export function Sidebar() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <IconContext.Provider
      value={{
        color: theme.gray300,
        size: 24,
        weight: 'light',
        className: 'icon',
      }}
    >
      <MenuList>
        <Logo />
        {sidebarMenu.map(menuItem => {
          const MenuIcon = (Icons as unknown as Record<string, Icon>)[
            menuItem.icon
          ];
          return (
            <MenuItem onClick={() => navigate(menuItem.route)}>
              <MenuIcon /> <MenuLabel>{menuItem.label}</MenuLabel>
            </MenuItem>
          );
        })}
      </MenuList>
    </IconContext.Provider>
  );
}
