import { useEffect, useState } from 'react';
import Sport from '../../components/Sport';
import { getBySport } from '../../http/sportService';

const Lol = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const teams = await getBySport('lol');
        setTeams(teams);
      } catch (e) {
        console.log('erro: ', e);
      }
    })();
  }, []);

  return <Sport name="LoL" teams={teams} />;
};

export default Lol;
