import ContactForm from '../Form/ContactForm'
import './Contacts.scss'

const Contacts = () => {
  return (
    <div className='contacts'>
      <div className='info'>
        My inbox is always open. Whether you have a question or just want to say hi or you want to meet me up for a
        coffee I'll try my best to get back to you!
      </div>
      <div className='content'>
        <div className='form-wrapper'>
          <ContactForm />
        </div>
        <div className='image'>
          <div className='main'>
            <img src='./img/mail.png' alt='box' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
