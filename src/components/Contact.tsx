import { useForm, ValidationError } from '@formspree/react'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { HiMail } from 'react-icons/hi'

const Contact = () => {
  const [state, handleSubmit] = useForm('myzplazl')

  return (
    <div className="contact">
      <h2 className="contact__heading">GET IN TOUCH</h2>
      <p className="contact__description">
        Whether you need a full-stack web application, 3D interactive experience, or system architecture
        consultation—let's build something remarkable.
      </p>

      {state.succeeded ? (
        <p className="contact__success">Thanks for reaching out! I'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__row">
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <textarea name="message" rows={4} placeholder="Your message" required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button type="submit" disabled={state.submitting} className="contact__submit">
            {state.submitting ? 'SENDING...' : 'SEND'}
          </button>
        </form>
      )}

      <div className="contact__socials">
        <a href="https://www.linkedin.com/in/javed-ahmed-baig-mogal-aa0757318/" target="_blank" rel="noopener noreferrer" className="contact__social-link">
          <SiLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/JavedBaig03" target="_blank" rel="noopener noreferrer" className="contact__social-link">
          <SiGithub /> GitHub
        </a>
        <a href="mailto:mogaljavedahmedbaig@gmail.com" className="contact__social-link">
          <HiMail /> mogaljavedahmedbaig@gmail.com
        </a>
      </div>
    </div>
  )
}

export default Contact
