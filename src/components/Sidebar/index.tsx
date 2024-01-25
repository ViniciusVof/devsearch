import { MenuList, MenuItem, MenuLabel, Logo } from './styles';
import { IconContext, Icon } from '@phosphor-icons/react';
import * as Icons from '@phosphor-icons/react';
import { sidebarMenu } from 'config/globals/sidebar';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { useUser } from 'contexts/UserContext'; // Importe o contexto de usuário

export function Sidebar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { logout } = useUser(); // Obtenha a função de logout do contexto de usuário

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
            <MenuItem
              key={menuItem.route}
              onClick={() => navigate(menuItem.route)}
            >
              <MenuIcon /> <MenuLabel>{menuItem.label}</MenuLabel>
            </MenuItem>
          );
        })}
        <MenuItem onClick={logout}>
          <Icons.SignOut /> <MenuLabel>Sair</MenuLabel>
        </MenuItem>
      </MenuList>
    </IconContext.Provider>
  );
}
