import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Container, Title, Image } from '../../styles';
import { Table, HighlightedText } from './styled';
import dayjs from 'dayjs';
import formatTime from './utils/formatTime';
import { getById } from '../../http/sportService';
import { RouteComponentProps } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';

interface RouterProps {
  teamId: string;
}

type TeamDetailProps = RouteComponentProps<RouterProps>;

const Team = ({ match }: TeamDetailProps) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [championship, setChampionship] = useState('');
  const [championshipDate, setChampionshipDate] = useState(dayjs(new Date()));
  const [now, setNow] = useState(dayjs().subtract(3, 'h'));
  const [loading, setLoading] = useState(true);

  const {
    params: { teamId },
  } = match;

  useEffect(() => {
    (async () => {
      try {
        const data = await getById(teamId);
        const { championship, championshipDate, image, name } = data;

        setName(name);
        setChampionship(championship);
        setChampionshipDate(championshipDate);
        setImage(image);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [teamId]);

  useEffect(() => {
    setTimeout(() => {
      setNow(now.add(1, 's'));
    }, 1000);
  }, [now]);

  const years = now.diff(championshipDate, 'y');
  const months = dayjs().subtract(years, 'y').diff(championshipDate, 'M');
  const days = now
    .subtract(years, 'y')
    .subtract(months, 'M')
    .diff(championshipDate, 'd');

  const hours = now
    .subtract(years, 'y')
    .subtract(months, 'M')
    .subtract(days, 'day')
    .diff(championshipDate, 'h');

  const minutes = now
    .subtract(years, 'y')
    .subtract(months, 'M')
    .subtract(days, 'day')
    .subtract(hours, 'h')
    .diff(championshipDate, 'm');

  const seconds = now
    .subtract(years, 'y')
    .subtract(months, 'M')
    .subtract(days, 'day')
    .subtract(hours, 'h')
    .subtract(minutes, 'm')
    .diff(championshipDate, 's');

  return (
    <Container>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Image
            style={{ marginTop: 25 }}
            src={`${process.env.REACT_APP_API_URI}${image}`}
          />
          <Title>
            O ??ltimo t??tulo da equipe <HighlightedText>{name}</HighlightedText>{' '}
            foi em {dayjs(championshipDate).format('DD/MM/YYYY')} no campeonato{' '}
            <HighlightedText>{championship}</HighlightedText>
          </Title>
          <Table>
            <thead>
              <tr>
                <th>{name} n??o ganha um t??tulo h??:</th>
              </tr>
            </thead>
            <tbody color="white">
              {formatTime(years, 'ano', 'anos')}
              {formatTime(months, 'mes', 'meses')}
              {formatTime(days, 'dia', 'dias')}
              {formatTime(hours, 'hora', 'horas')}
              {formatTime(minutes, 'minuto', 'minutos')}
              {formatTime(seconds, 'segundo', 'segundos')}
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
};

Team.propTypes = {
  match: PropTypes.object.isRequired,
};

Team.defaultProps = {
  match: null,
};

export default Team;
