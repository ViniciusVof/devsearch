import { SignIn } from '@phosphor-icons/react';
import {
  AllowedTime,
  CapacityInformation,
  Card,
  ImagePlace,
  Informations,
  ItemInformation,
  PlaceAllowed,
  PlaceInformations,
  Price,
  Title,
} from './styles';

export function Location() {
  return (
    <Card>
      <PlaceInformations>
        <Informations>
          <Title>Frontend</Title>
          <Price>
            R$ 10<span>por dev</span>
          </Price>
          <ItemInformation className="information">
            Endereço: <span>Rua pedro bento da silva 891, centro</span>
          </ItemInformation>
          <ItemInformation className="information">
            Estabelecimento: <span>Jacaré vermelho</span>
          </ItemInformation>
        </Informations>
        <CapacityInformation>3/8</CapacityInformation>
      </PlaceInformations>
      <PlaceAllowed>
        <ImagePlace src="https://patiobatel.com.br/wp-content/uploads/2022/02/img-4968-1024x682.jpg" />
        <AllowedTime>
          <ItemInformation>
            Horário Permitido: <span>Até as 12h</span>
          </ItemInformation>
          <SignIn size={32} weight="light" className="icon" />
        </AllowedTime>
      </PlaceAllowed>
    </Card>
  );
}
