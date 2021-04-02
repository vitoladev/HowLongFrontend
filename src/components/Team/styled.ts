import styled from 'styled-components';

const Table = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: center;
  border: 2px solid white;
  color: #fff;
  thead {
    background-color: #fc115c;
  }
  tr {
    text-align: center;
  }
  tbody {
    align-self: center;
  }
  td {
    font-size: clamp(1em, 2vw, 2rem);
  }

  th {
    text-transform: uppercase;
    padding: 5px;
    font-size: clamp(1em, 2vw, 2rem);
  }
`;

export { Table };
