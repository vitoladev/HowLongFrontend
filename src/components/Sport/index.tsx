import { Link } from 'react-router-dom';
import SportModel from '../../models/SportModel';
import { Title, Image } from '../../styles';
import { Row, TeamContainer, TeamElement } from './styled';

const Sport = ({ name, teams }: SportModel) => (
  <>
    <Title>Veja os últimos títulos dos times de {name}</Title>
    <Row>
      <TeamContainer>
        {teams.map(({ id, sport, name, image }) => (
          <TeamElement key={id}>
            <Link to={`${sport}/${id}`}>
              <Image src={`${process.env.REACT_APP_API_URI}${image}`} />
            </Link>
            <p>{name}</p>
          </TeamElement>
        ))}
      </TeamContainer>
    </Row>
  </>
);

export default Sport;
