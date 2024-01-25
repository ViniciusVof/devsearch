import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  max-width: 100%;
  margin: 0 auto;
`;

export const ImageContainer = styled.div`
  margin-top: 8px;
  padding: 40px 16px;
  border: 1px dashed ${props => props.theme.gray200};
  border-radius: 8px;
  background-color: ${props => props.theme.gray100};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 8px;
  }

  p {
    text-align: center;
    color: ${props => props.theme.gray300};
  }

  input {
    display: none;
  }
`;

export const UploadIcon = styled.div`
  font-size: 36px;
  color: ${props => props.theme.gray300};
`;
