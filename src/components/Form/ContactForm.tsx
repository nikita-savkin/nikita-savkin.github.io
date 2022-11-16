import React, { createRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.scss'

const ContactForm = () => {
  const [showedThanks, setShowedThanks] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const form = createRef<HTMLFormElement>()

  const sendEmail = (e: any) => {
    e.preventDefault()
    setShowedThanks(true)

    if (form.current) {
      emailjs.sendForm('service_my96ckv', 'template_rno7pi9', form.current, 'ho_Xbu3Uhg2wX6dBJ').then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
    }

    setTimeout(() => {
      setFirstName('')
      setEmail('')
      setMessage('')
      setShowedThanks(false)
    }, 5000)
  }

  return (
    <div className='form-container'>
      {showedThanks && (
        <div className='thanks-msg'>
          <span>Thank you!</span>
          <span>I'll reply as soon as possible!</span>
        </div>
      )}
      <form ref={form} onSubmit={sendEmail}>
        <input
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          type='text'
          placeholder='Name'
          name='from_name'
        ></input>
        <br />
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type='email'
          placeholder='Email'
          name='from_name'
        ></input>
        <br />
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder='Type something...'
          name='message'
        />
        <br />
        <button>Send</button>
        <br />
      </form>
      <div className='drops'>
        <div className='drop drop-1'></div>
        <div className='drop drop-2'></div>
        <div className='drop drop-3'></div>
        <div className='drop drop-4'></div>
        <div className='drop drop-5'></div>
      </div>
    </div>
  )
}

export default ContactForm
