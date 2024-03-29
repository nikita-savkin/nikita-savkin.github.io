import ContactForm from '../Form/ContactForm'
import './Contacts.scss'

const Contacts = () => {
  return (
    <div className='contacts'>
      <div className='info'>
        Don't hesitate to reach out to me anytime, whether you have a question or just want to say hi - I'll do my best
        to respond as soon as possible!
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
