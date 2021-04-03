import styled from 'styled-components';

const Table = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: center;
  border: 2px solid white;
  margin-top: 1rem;
  color: #fff;
  thead {
    background-color: #fc115c;
  }
  tr {
    text-align: center;
  }

  td {
    font-size: clamp(1rem, 5vw, 1.8rem);
  }

  th {
    text-transform: uppercase;
    padding: 2px;
    font-size: clamp(1rem, 2vw, 2rem);
  }
`;

export { Table };
