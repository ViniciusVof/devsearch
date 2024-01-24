// src/components/AddGroupForm.tsx
import { Input, Button } from 'config/globals/components';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  ButtonContainer,
  GridContainer,
  ImageContainer,
  UploadIcon,
} from './styles';
import { Upload } from '@phosphor-icons/react';

interface AddGroupFormProps {
  onClose: () => void;
}

interface FormData {
  title: string;
  price: number;
  address: string;
  place: string;
  participants: number;
  capacity: number;
  startDate: string;
  allowedTime: string;
  imagePlace: string;
  imageFile: File | null;
}

const AddGroupForm: React.FC<AddGroupFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    price: 0,
    address: '',
    place: '',
    participants: 0,
    capacity: 0,
    startDate: '',
    allowedTime: '',
    imagePlace: '',
    imageFile: null,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Lógica para enviar os dados do formulário para o backend
    // ...

    // Feche o formulário após o envio bem-sucedido
    onClose();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = (event.target.files && event.target.files[0]) || null;
    setFormData({
      ...formData,
      imageFile: file,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <GridContainer>
        <label>
          Título:
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Preço:
          <Input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Endereço:
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Local:
          <Input
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
          />
        </label>
        <label>
          Participantes:
          <Input
            type="number"
            name="participants"
            value={formData.participants}
            onChange={handleChange}
          />
        </label>
        <label>
          Capacidade:
          <Input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
          />
        </label>
        <label>
          Data de Início:
          <Input
            type="datetime-local"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Horário Permitido:
          <Input
            type="datetime-local"
            name="allowedTime"
            value={formData.allowedTime}
            onChange={handleChange}
          />
        </label>
        <label>
          Imagem do Local:
          <ImageContainer>
            {formData.imageFile ? (
              <img
                src={URL.createObjectURL(formData.imageFile)}
                alt="Imagem do Local"
              />
            ) : (
              <>
                <UploadIcon>
                  <Upload />
                </UploadIcon>
                <p>Arraste e solte a imagem ou clique para selecionar.</p>
              </>
            )}
            <Input
              type="file"
              name="imageFile"
              accept="image/*"
              onChange={handleImageChange}
            />
          </ImageContainer>
        </label>
      </GridContainer>
      <ButtonContainer>
        <Button type="button" onClick={onClose}>
          Voltar
        </Button>
        <Button type="submit">Adicionar Grupo</Button>
      </ButtonContainer>
    </form>
  );
};

export default AddGroupForm;
