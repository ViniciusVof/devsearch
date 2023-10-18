import * as Components from 'components';
import { Wrapper, TabsContent } from './styles';

interface UserProps {
  name: string;
  participations: number;
  createdGroups: number;
  image: string;
}

interface HeaderProps {
  onTabSelected?: Function;
  tabsItems?: string[];
  showTabs?: boolean;
  showProfileStatics?: boolean;
  user?: UserProps;
}

export function Header({
  user,
  showProfileStatics,
  showTabs,
  onTabSelected,
  tabsItems,
}: HeaderProps) {
  return (
    <>
      <Wrapper>
        {showProfileStatics && user && (
          <Components.ProfileStatics
            name={user.name}
            participations={user.participations}
            createdGroups={user.createdGroups}
            image={user.image}
          />
        )}
      </Wrapper>
      {showTabs && (
        <TabsContent>
          <Components.Tab onTabSelected={onTabSelected}>
            {tabsItems?.map(tabItem => (
              <Components.TabItem>{tabItem}</Components.TabItem>
            ))}
          </Components.Tab>
        </TabsContent>
      )}
    </>
  );
}
