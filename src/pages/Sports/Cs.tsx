import { useEffect, useState } from 'react';
import Sport from '../../components/Sport';
import { getBySport } from '../../http/sportService';

const Cs = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const teams = await getBySport('cs');
        setTeams(teams);
      } catch (e) {
        console.log('erro: ', e);
      }
    })();
  }, []);

  return <Sport name="CS" teams={teams} />;
};

export default Cs;
