import {
  CapacityInformation,
  Card,
  ImagePlace,
  Informations,
  ItemInformation,
  Price,
  Title,
} from './styles';

export function Location() {
  return (
    <Card>
      <Title>Frontend</Title>
      <ImagePlace src="https://patiobatel.com.br/wp-content/uploads/2022/02/img-4968-1024x682.jpg" />
      <Price>
        R$ 10<span>por dev</span>
      </Price>
      <Informations>
        <ItemInformation>
          Endereço: <span>Rua pedro bento da silva 891, centro</span>
        </ItemInformation>
        <ItemInformation>
          Estabelecimento: <span>Jacaré vermelho</span>
        </ItemInformation>
      </Informations>
      <CapacityInformation>3/8</CapacityInformation>
    </Card>
  );
}
