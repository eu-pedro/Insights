import { 
  Alert,
  ModalContent,
  CloseButton
 } from './style'

 import Close from '../../assets/X.png'

const Modal = ({closeModal, bgAlert}) => {
  return (
    <Alert bgAlert={bgAlert}>
      <CloseButton src={Close} alt='close button' onClick={closeModal}/>
      <ModalContent>Conteudo</ModalContent>
    </Alert>
  )
}

export default Modal