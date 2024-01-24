import * as Components from 'components';
import { groups } from 'config/mock';
import { useState } from 'react';
import { LocationList } from './styles';

export function Home() {
  const [selected, setSelected] = useState(0);
  const currentDate = new Date();
  const daysToConsider = 7;
  const weekendDay = 0;
  const ownerIdToFilter = 1;

  const onTabSelected = (index: any) => {
    setSelected(index);
  };

  return (
    <Components.Layout titleSEO="Home">
      <Components.Header
        showProfileStatics={true}
        user={{
          name: 'Vinicius Oliveira de Freitas',
          participations: 10,
          createdGroups: 2,
          image: 'https://avatars.githubusercontent.com/u/8822046?v=4',
        }}
        showTabs={true}
        onTabSelected={onTabSelected}
        tabsItems={['Acontecendo agora', 'Nesta semana', 'Meus grupos']}
      />
      <Components.TabPanel>
        <LocationList>
          {selected === 0 &&
            groups
              .filter(event => {
                const startDate = new Date(event.startDate);
                const allowedTime = new Date(event.allowedTime);

                return startDate <= currentDate && currentDate <= allowedTime;
              })
              .map(group => (
                <Components.Location
                  title={group.title}
                  price={group.price}
                  priceType={group.priceType}
                  address={group.address}
                  place={group.place}
                  participants={group.participants}
                  capacity={group.capacity}
                  startDate={group.startDate}
                  allowedTime={group.allowedTime}
                  imagePlace={group.imagePlace}
                />
              ))}
          {selected === 1 &&
            groups
              .filter(event => {
                const startDate = new Date(event.startDate);

                // Verifica se o evento ocorre nos próximos dias desta semana
                const isUpcomingThisWeek =
                  startDate >= currentDate &&
                  startDate <=
                    new Date(
                      currentDate.getTime() +
                        daysToConsider * 24 * 60 * 60 * 1000
                    ) &&
                  startDate.getDay() !== weekendDay;

                return isUpcomingThisWeek;
              })
              .map(group => (
                <Components.Location
                  title={group.title}
                  price={group.price}
                  priceType={group.priceType}
                  address={group.address}
                  place={group.place}
                  participants={group.participants}
                  capacity={group.capacity}
                  startDate={group.startDate}
                  allowedTime={group.allowedTime}
                  imagePlace={group.imagePlace}
                />
              ))}
          {selected === 2 &&
            groups
              .filter(event => event.ownerId === ownerIdToFilter)
              .map(group => (
                <Components.Location
                  title={group.title}
                  price={group.price}
                  priceType={group.priceType}
                  address={group.address}
                  place={group.place}
                  participants={group.participants}
                  capacity={group.capacity}
                  startDate={group.startDate}
                  allowedTime={group.allowedTime}
                  imagePlace={group.imagePlace}
                />
              ))}
        </LocationList>
      </Components.TabPanel>
    </Components.Layout>
  );
}
