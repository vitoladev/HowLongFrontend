import SportModel from '../../models/SportModel';
import { Container, Title, Image } from '../../styles';
import { Row, TeamContainer, TeamElement } from './styled';

const Sport = ({ name, teams }: SportModel) => (
  <Container>
    <Title>Veja os últimos títulos dos times de {name}</Title>
    <Row>
      <TeamContainer>
        {teams.map(({ id, sport, name, image }) => (
          <TeamElement key={id}>
            <a href={`${sport}/${id}`}>
              <Image src={image} />
            </a>
            <p>{name}</p>
          </TeamElement>
        ))}
      </TeamContainer>
    </Row>
  </Container>
);

export default Sport;
