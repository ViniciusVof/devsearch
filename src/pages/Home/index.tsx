import * as Components from 'components';
import { useState, useEffect } from 'react';
import { FloatingButton, LocationList } from './styles';
import * as groupService from 'services/groupService';
import { Plus } from '@phosphor-icons/react';
import AddGroupForm from './AddGroupForm';
import Modal from 'components/Modal';

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selected, setSelected] = useState(0);
  const [groups, setGroups] = useState([]);

  const ownerIdToFilter = 'asdasdas';

  const onTabSelected = (index: any) => {
    setSelected(index);
  };

  const fetchGroupsByTab = async () => {
    try {
      let response;

      switch (selected) {
        case 0:
          response = await groupService.getGroupsToday();
          break;
        case 1:
          response = await groupService.getGroupsThisWeek();
          break;
        case 2:
          response = await groupService.getGroupsByOwnerId(
            String(ownerIdToFilter)
          );
          break;
        default:
          response = await groupService.getAllGroups();
          break;
      }

      setGroups(response.data);
    } catch (error) {
      console.error('Erro ao obter grupos:', error);
    }
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchGroupsByTab();
  }, [selected]);

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
      {!isModalOpen && (
        <Components.TabPanel>
          <LocationList>
            {Array.isArray(groups) &&
              groups.map((group: any) => (
                <Components.Location key={group.id} {...group} />
              ))}
          </LocationList>
          <FloatingButton onClick={handleModalOpen}>
            <Plus />
          </FloatingButton>
        </Components.TabPanel>
      )}
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        title="Adicionar Novo Grupo"
      >
        <AddGroupForm onClose={handleModalClose} />
      </Modal>
    </Components.Layout>
  );
}
