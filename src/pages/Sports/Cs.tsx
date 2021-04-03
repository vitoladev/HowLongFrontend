import { useEffect, useState } from 'react';
import Sport from '../../components/Sport';
import { getBySport } from '../../http/sportService';

const Cs = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    (async () => {
      const teams = await getBySport('cs');
      setTeams(teams);
    })();
  }, []);

  return <Sport name="CS" teams={teams} />;
};

export default Cs;
