import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import TeamModel from '../../models/TeamModel';
import { Title, Image } from '../../styles';
import { Table } from './styled';
import dayjs from 'dayjs';
import formatTime from './utils/formatTime';

import { Container } from '@chakra-ui/react';

const Team = ({ name, date, image }: TeamModel) => {
  const championshipDate = dayjs(new Date(date));
  const [now, setNow] = useState(dayjs().subtract(3, 'h'));

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

  useEffect(() => {
    setTimeout(() => {
      setNow(now.add(1, 's'));
    }, 1000);
  });
  return (
    <Container centerContent>
      <Image src={image} />
      <Title>
        O último título da {name} foi em {dayjs(date).format('DD/MM/YYYY')}
      </Title>
      <Table>
        <thead>
          <tr>
            <th>{name} não ganha um título há:</th>
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
    </Container>
  );
};

Team.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
};

Team.defaultProps = {
  name: '',
  date: '',
};

export default Team;
