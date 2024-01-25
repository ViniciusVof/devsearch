// src/components/SignupForm.tsx
import React, { useState } from 'react';
import * as S from './styles';

interface SignupFormProps {
  onSubmit: (formData: {
    fullName: string;
    email: string;
    password: string;
  }) => void;
}

export function SignupForm({ onSubmit }: SignupFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Nome"
        required
      />
      <S.Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <S.Input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Senha"
        required
      />
      <S.Button type="submit">Cadastrar</S.Button>
    </S.Form>
  );
}
