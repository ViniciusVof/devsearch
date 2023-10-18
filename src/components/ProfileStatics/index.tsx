import * as Components from 'components';
import { FullName, InformationProfile, Profile, Statics } from './styles';

interface ProfileStaticsProps {
  participations: number;
  createdGroups: number;
  name: string;
  image: string;
}

export function ProfileStatics({
  participations,
  createdGroups,
  name,
  image,
}: ProfileStaticsProps) {
  return (
    <Profile>
      <Components.Avatar size="90px" image={image} />
      <InformationProfile>
        <FullName>{name}</FullName>
        <Statics>
          <span>{participations}</span> Participações
          <span>{createdGroups}</span> Grupos criados
        </Statics>
      </InformationProfile>
    </Profile>
  );
}
