import styled from 'styled-components'

const Formulario = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--cor-principal);
      content: '';
      opacity: 0.7;
    }
`
const Container = styled.div`
  position: relative;
  color: #eee;
`

const HeroTitulo = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;

  @media (max-width: 768px) {
      font-size: 32px;
  }
`

const Hero = () => (
  <Formulario>
    <Container className="container">
      <HeroTitulo>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitulo>
    </Container>
  </Formulario>
)

export default Hero
