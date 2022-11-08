import React, { createRef } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.scss'

const ContactForm = () => {
  const form = createRef<HTMLFormElement>()

  const sendEmail = (e: any) => {
    console.log(form.current)
    e.preventDefault()

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
  }

  return (
    <div className='form-container'>
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' placeholder='Name' name='from_name'></input>
        <br />
        <input type='email' placeholder='Email' name='from_name'></input>
        <br />
        <textarea placeholder='Type something...' name='message' />
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
