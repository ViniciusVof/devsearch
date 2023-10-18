import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  background-color: ${props => props.theme.white};
  border-radius: 16px;
  box-shadow: 0px 2px 4px rgba(33, 36, 41, 0.05);
  width: 600px;
  height: 200px;
  padding: 16px 24px;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 12px;
`;

export const ImagePlace = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  height: 180px;
  object-fit: contain;
  border-radius: 0px 16px 0px 16px;
`;

export const Price = styled.div`
  display: inline;
  position: relative;
  font-size: 24px;
  font-weight: 400;
  span {
    position: absolute;
    right: -37px;
    bottom: -10px;
    font-size: 14px;
    color: ${props => props.theme.primary};
  }
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 10px;
`;

export const ItemInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
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
  position: absolute;
  bottom: 16px;
`;
