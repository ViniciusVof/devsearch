import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.white};
  border-radius: 16px;
  box-shadow: 0px 2px 4px rgba(33, 36, 41, 0.05);
  padding: 0px 0px 16px 24px;
  margin-bottom: 32px;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 16px 16px 12px 0px;
`;

export const ImagePlace = styled.img`
  width: 280px;
  height: 250px;
  object-fit: cover;
  border-radius: 0px 16px 0px 16px;
`;

export const Price = styled.div`
  display: inline;
  width: max-content;
  position: relative;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 12px;
  span {
    position: absolute;
    right: -37px;
    bottom: -10px;
    font-size: 14px;
    color: ${props => props.theme.primary};
  }
`;

export const PlaceInformations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Informations = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 0px;
  color: ${props => props.theme.gray200};
  span {
    max-width: 300px;
    text-transform: capitalize;
    color: ${props => props.theme.black};
  }
`;

export const CapacityInformation = styled.div`
  font-size: 24px;
  font-weight: 400;
`;

export const PlaceAllowed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  bottom: 16px;
  right: 16px;
  .allowedTime {
    display: flex;
    flex-direction: row;
  }
  .icon {
    fill: ${props => props.theme.black};
    cursor: pointer;
    transition: all 500ms;
    &:hover {
      fill: ${props => props.theme.primary};
    }
  }
`;

export const AllowedTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
  padding-right: 16px;
`;
