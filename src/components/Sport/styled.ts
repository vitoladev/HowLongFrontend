import styled from 'styled-components';

const Row = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const TeamContainer = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const TeamElement = styled.article`
  color: #fff;
  font-size: 1rem;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 3px solid #fff;
  padding: 1rem 0px;
  margin-right: 2rem;
  margin-bottom: 2rem;
  border-radius: 15px;
  a {
    background-color: #e879ea;
  }
  p {
    font-weight: bold;
    letter-spacing: 4px;
  }
`;
export { Row, TeamContainer, TeamElement };
