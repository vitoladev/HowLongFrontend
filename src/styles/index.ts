import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  letter-spacing: 1px;
  color: #fff;
  font-size: clamp(1.2rem, 2.5vw, 2rem);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

export { Container, Title, Image };
