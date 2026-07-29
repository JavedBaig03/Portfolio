import { useForm, ValidationError } from '@formspree/react'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { HiMail } from 'react-icons/hi'

const Contact = () => {
  const [state, handleSubmit] = useForm('myzplazl')

  return (
    <div className="contact">
      <h2 className="contact__heading">Let's Connect</h2>
      <p className="contact__description" style={{ fontWeight: 500, fontSize: '1.2rem', color: 'var(--color-text-primary)' }}>
        Currently open to internship and full-time opportunities. <br/>
        <span style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', fontWeight: 400 }}>I'd love to discuss how I can contribute to your team.</span>
      </p>

      {state.succeeded ? (
        <p className="contact__success">Thank you for reaching out. I'll respond within 24 hours.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__row">
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <textarea name="message" rows={4} placeholder="Tell me about your project or opportunity" required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button type="submit" disabled={state.submitting} className="contact__submit">
            {state.submitting ? 'Sending...' : 'Send Message'}
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
