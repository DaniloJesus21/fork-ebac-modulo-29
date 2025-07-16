import styled from 'styled-components';
import { Theme } from '../../Theme';

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const VagaContainer = styled.li`
  border: 1px solid ${({theme}) => theme.colors.primary};
  background-color: ${({theme}) => theme.colors.secondary};
  color: ${({theme}) => theme.colors.primary};
  padding: 16px;
  transition: all ease .3s;
  border-radius: 8px;

  &:hover {
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.secondary};

    a {
      border-color: ${({theme}) => theme.colors.primary};
      background-color: ${({theme}) => theme.colors.secondary};
      color: ${({theme}) => theme.colors.primary};
    }
  }
`

const Titulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

const Link = styled.a`
  border-color: ${({theme}) => theme.colors.secondary};
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.secondary};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }  
`

const Vaga = (props: Props) => (
  <VagaContainer>
    <Titulo>{props.titulo}</Titulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <Link href="#">
      Ver detalhes e candidatar-se
    </Link>
  </VagaContainer>
)

export default Vaga
