import { useEffect, useState } from 'react';
import Sport from '../../components/Sport';
import { getBySport } from '../../http/sportService';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Container } from '../../styles';

const Cs = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const teams = await getBySport('cs');
        setTeams(teams);
        setLoading(false);
      } catch (e) {
        console.log('erro: ', e);
      }
    })();
  }, []);

  return (
    <Container>
      {loading ? <LoadingSpinner /> : <Sport name="CS" teams={teams} />}
    </Container>
  );
};

export default Cs;
