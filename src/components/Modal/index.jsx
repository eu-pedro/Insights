import { 
  Alert,
  ModalContent,
  CloseButton
 } from './style'

 import Close from '../../assets/X.png'



const Modal = ({closeModal, background, title, date}) => {
  return (
    <Alert background={background}>
      <CloseButton src={Close} alt='close button' onClick={closeModal}/>
      <ModalContent>
        <h2>{title}</h2>
        <span>{date}</span>
      </ModalContent>
      
    </Alert>
  )
}

export default Modal