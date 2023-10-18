import * as Components from 'components';
import { groups } from 'config/mock';
import { useState } from 'react';

export function Home() {
  const [selected, setSelected] = useState(0);
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
        tabsItems={['Acontecendo Agora', 'Nos próximos dias', 'Meus grupos']}
      ></Components.Header>
      <Components.TabPanel>
        {selected === 0 &&
          groups.map(group => (
            <Components.Location
              title={group.title}
              price={group.price}
              priceType={group.priceType}
              address={group.address}
              place={group.place}
              participants={group.participants}
              capacity={group.capacity}
              allowedTime={group.allowedTime}
              imagePlace={group.imagePlace}
            />
          ))}
        {selected === 1 && 'Prox ihul'}
        {selected === 2 && 'Meus agora ihul'}
      </Components.TabPanel>
    </Components.Layout>
  );
}
