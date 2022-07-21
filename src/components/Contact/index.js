import Loader from 'react-loaders';
import './index.scss';
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () =>{
    const form =useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm(
            'service_kiigl62',
            'template_hy9e1fu',
            form.current,
            'JC425YneY-QAc3akR'
          )
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

    return(
    <>
    <div className='container contact-page'>
    <div className = 'text-zone'>
        <h1>
            Contact Me!
        </h1>
<p>
    Feel free to fill out the form below to ask any questions or to give some job opportunities! Any message is welcome!
</p>
<div className = 'contact=form'>
    <form ref = {form} onSubmit= {sendEmail}>
        <ul>
            <li className = 'half'>
                <input type = "text" name ="name" placeholder='Name' required/>
            </li>
            <li className = 'half'>
                <input type = "email" name ="email" placeholder='Email' required/>
            </li>
            <li >
                <input placeholder='Subject' type= 'text' name = 'subject' required/>
            </li>
            <li >
                <textarea placeholder='Message'  name = 'message' required/>
            </li>
            <li >
            <input type="submit" className="flat-button" value="SEND" />
            </li>
        </ul>
    </form>
</div>
    </div>
    </div>
    <Loader type="ball-zig-zag"/>
    </>)

}
export default Contact