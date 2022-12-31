// import styles
import {
  ContainerHeader,
 } from './styles'

const Header = ({logo, textAlt}) => {
  return (
    <ContainerHeader>
      <img src={logo} alt={textAlt} />
    </ContainerHeader>
  )
}

export default Header;