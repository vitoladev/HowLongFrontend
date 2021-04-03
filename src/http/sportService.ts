import axios from 'axios';

const getBySport = async (sport: string) => {
  const sportUri = process.env.REACT_APP_SPORT_URI;
  const response = await axios.get(`${sportUri}/${sport}`);
  const { data } = response;
  return data;
};

const getById = async (id: string) => {
  const teamUri = process.env.REACT_APP_TEAM_URI;
  const response = await axios.get(`${teamUri}/${id}`);
  const { data } = response;

  return data;
};

export { getBySport, getById };
