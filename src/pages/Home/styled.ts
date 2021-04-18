import styled from 'styled-components';

const SportContainer = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const SportElement = styled.article`
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

export { SportContainer, SportElement };
