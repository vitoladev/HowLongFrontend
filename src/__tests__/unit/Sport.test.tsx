import { render } from '@testing-library/react';
import Sport from '../../components/Sport';
import '@testing-library/jest-dom/extend-expect';
import teamMock from '../../__mocks__/teamsMock';
import { BrowserRouter } from 'react-router-dom';

const sportName = 'LoL';

describe('Testing Sport component', () => {
  test('should have image', () => {
    const { getByText, getByRole } = render(
      <BrowserRouter>
        <Sport name={sportName} teams={teamMock} />{' '}
      </BrowserRouter>,
    );
    const title = getByText(
      `Veja os últimos títulos dos times de ${sportName}`,
    );

    expect(title).toBeInTheDocument();

    const teamName = getByText(teamMock[0].name);
    expect(teamName).toBeInTheDocument();
    const teamImage = getByRole('img');
    expect(teamImage).toBeInTheDocument();
  });
});
