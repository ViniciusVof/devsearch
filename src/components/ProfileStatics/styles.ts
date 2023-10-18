import styled from 'styled-components';

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const InformationProfile = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  gap: 12px;
`;
export const FullName = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: ${props => props.theme.black};
`;

export const Statics = styled.div`
  span {
    &:first-child {
      margin-left: 0px;
    }
    margin-left: 10px;
    font-size: 14px;
    color: ${props => props.theme.black};
  }

  font-size: 14px;
  color: ${props => props.theme.gray300};
`;
