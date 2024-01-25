// src/components/Modal/styles.ts
import styled from 'styled-components';

export const ModalWrapper = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 600px; /* Defina a largura máxima do modal */
  max-height: 80%; /* Defina a altura máxima do modal */
  overflow-y: auto; /* Adicione uma barra de rolagem se o conteúdo exceder a altura máxima */
  scrollbar-width: thin; /* Largura da barra de rolagem em navegadores compatíveis */
  &::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props =>
      props.theme.gray200}; /* Cor do pomo da barra de rolagem */
    border-radius: 4px; /* Raio do pomo da barra de rolagem */
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px; /* Adicione uma margem abaixo do cabeçalho */
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 24px; /* Ajuste o tamanho da fonte conforme necessário */
  color: #333; /* Personalize a cor do título */
  margin-bottom: 10px; /* Adicione uma margem abaixo do título */
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px; /* Ajuste o tamanho do botão de fechar */
  color: ${props =>
    props.theme.primary}; /* Use a cor primária para o botão de fechar */
`;
