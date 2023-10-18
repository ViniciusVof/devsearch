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

interface LocationProps {
  title: string;
  price: number;
  priceType: string;
  address: string;
  place: string;
  participants: number;
  capacity: number;
  allowedTime: string;
  imagePlace: string;
}

export function Location({
  title,
  price,
  priceType,
  address,
  place,
  participants,
  capacity,
  allowedTime,
  imagePlace,
}: LocationProps) {
  return (
    <Card>
      <PlaceInformations>
        <Informations>
          <Title>{title}</Title>
          <Price>
            R$ {price}
            <span>{priceType}</span>
          </Price>
          <ItemInformation className="information">
            Endereço: <span>{address}</span>
          </ItemInformation>
          <ItemInformation className="information">
            Estabelecimento: <span>{place}</span>
          </ItemInformation>
        </Informations>
        <CapacityInformation>
          {participants}/{capacity}
        </CapacityInformation>
      </PlaceInformations>
      <PlaceAllowed>
        <ImagePlace src={imagePlace} />
        <AllowedTime>
          <ItemInformation>
            Horário Permitido: <span>{allowedTime}</span>
          </ItemInformation>
          <SignIn size={32} weight="light" className="icon" />
        </AllowedTime>
      </PlaceAllowed>
    </Card>
  );
}
