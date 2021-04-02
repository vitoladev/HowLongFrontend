import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: clamp(1em, 2.5vw, 1.5em);
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
`;

export { Container, Title, Image };
