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
import dayjs from 'dayjs';

interface LocationProps {
  title: string;
  price: number;
  priceType: string;
  address: string;
  place: string;
  participants: number;
  capacity: number;
  imagePlace: string;
  startDate: string;
  allowedTime: string;
}

export function Location({
  title,
  price,
  priceType,
  address,
  place,
  participants,
  capacity,
  imagePlace,
  startDate,
  allowedTime,
}: LocationProps) {
  const priceTypeLabel: { [key: string]: string } = {
    group: 'grupo',
    dev: 'dev',
  };

  return (
    <Card>
      <PlaceInformations>
        <Informations>
          <Title>{title}</Title>
          <Price>
            R$ {price}
            <span>{priceTypeLabel[priceType]}</span>
          </Price>
          <ItemInformation className="information">
            Endereço: <span>{address}</span>
          </ItemInformation>
          <ItemInformation className="information">
            Estabelecimento: <span>{place}</span>
          </ItemInformation>

          <ItemInformation className="information">
            Início:{' '}
            <span>
              {dayjs(new Date(startDate).toString()).format(
                'DD/MM/YYYY [-] HH:mm[hrs]'
              )}
            </span>
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
            Horário Permitido:{' '}
            <span>Até {dayjs(allowedTime).format('HH:mm[hrs]')}</span>
          </ItemInformation>
          <SignIn size={32} weight="light" className="icon" />
        </AllowedTime>
      </PlaceAllowed>
    </Card>
  );
}
