import axios from 'axios';

const getBySport = async (sport: string) => {
  try {
    const sportUri = process.env.REACT_APP_SPORT_URI;
    const response = await axios.get(`${sportUri}/${sport}`);
    const { data } = response;
    return data;
  } catch (e) {
    console.log('erro: ', e);
  }
};

const getById = async (id: string) => {
  const teamUri = process.env.REACT_APP_TEAM_URI;
  try {
    const response = await axios.get(`${teamUri}/${id}`);
    const { data } = response;

    return data;
  } catch (e) {
    console.log('erro: ', e);
  }
};

export { getBySport, getById };
