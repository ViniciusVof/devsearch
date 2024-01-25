import { useState } from 'react';
import * as Components from 'components';
import * as S from './styles';
import { loginUser, registerUser } from 'services/userService';
import { useToast } from 'contexts/ToastContext';
import { useUser } from 'contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export function LoginSignup() {
  const [selectedTab, setSelectedTab] = useState(0);
  const { success, error } = useToast();
  const { updateUser } = useUser();
  const navigate = useNavigate();

  const handleLoginSubmit = async (data: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await loginUser(data);
      success('Usuário logado com sucesso!');
      updateUser(response.data);
      navigate('/');
      // Lógica adicional após o login bem-sucedido (redirecionamento, etc.)
    } catch (err) {
      error('Erro ao fazer login!');
      console.error('Erro ao fazer login:', err);
      // Tratar erro de login (exibir mensagem de erro, limpar campos, etc.)
    }
  };

  const handleSignupSubmit = async (data: {
    fullName: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await registerUser(data);
      success('Cadastro realizado com sucesso');
      updateUser(response.data);
      navigate('/');
    } catch (err) {
      error('Erro ao cadastrar usuário');
      console.error('Erro ao cadastrar usuário', err);
    }
  };

  return (
    <S.PageContainer>
      <S.ImageContainer>
        {selectedTab === 0 ? (
          <img src="https://placehold.co/1000" alt="Login" />
        ) : (
          <img src="https://placehold.co/1000" alt="Cadastro" />
        )}
      </S.ImageContainer>
      <S.FormContainer>
        <Components.Tab onTabSelected={setSelectedTab}>
          <Components.TabItem>Login</Components.TabItem>
          <Components.TabItem>Cadastro</Components.TabItem>
        </Components.Tab>
        <Components.TabPanel>
          <S.LoginSignupForm>
            {selectedTab === 0 ? (
              <Components.LoginForm onSubmit={handleLoginSubmit} />
            ) : (
              <Components.SignupForm onSubmit={handleSignupSubmit} />
            )}
          </S.LoginSignupForm>
        </Components.TabPanel>
      </S.FormContainer>
    </S.PageContainer>
  );
}
