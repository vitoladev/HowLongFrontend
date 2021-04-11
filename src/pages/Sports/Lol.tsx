import { useEffect, useState } from 'react';
import Sport from '../../components/Sport';
import { getBySport } from '../../http/sportService';
import LoadingSpinner from '../../components/LoadingSpinner';

const Lol = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const teams = await getBySport('lol');
        setTeams(teams);
        setLoading(false);
      } catch (e) {
        console.log('erro: ', e);
      }
    })();
  }, []);

  return loading ? <LoadingSpinner /> : <Sport name="LoL" teams={teams} />;
};

export default Lol;
