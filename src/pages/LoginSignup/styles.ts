// src/components/styles.tsx
import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ImageContainer = styled.div`
  flex: 1;
`;

export const FormContainer = styled.div`
  flex: 1;
  padding: 0 20px;
  height: 340px;
  > div {
    display: flex;
    justify-content: center;
  }
`;

export const LoginSignupForm = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
`;
