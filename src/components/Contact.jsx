import { useState } from 'react';

const apiRoot = import.meta.env.VITE_API_URL || '/api';
const emptyForm = { fullName: '', email: '', phone: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState(null);

  function update(event) {
    const { name, value } = event.target;
    setForm(current => ({ ...current, [name]: value }));
  }

  async function submit(event) {
    event.preventDefault();
    setSending(true);
    setNotice(null);
    try {
      const response = await fetch(`${apiRoot}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || 'Unable to send your message.');
      setNotice({ type: 'success', text: 'Thank you! Your message was saved successfully.' });
      setForm(emptyForm);
    } catch (error) {
      setNotice({ type: 'error', text: error instanceof TypeError
        ? 'Could not connect to the server. Start the backend and MongoDB, then try again.'
        : error.message });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="page-section contact-section">
      <div className="contact-left">
        <h2 className="contact-heading">Let's Work Together</h2>
        <p className="contact-desc">Have a project in mind or want to collaborate? I'd love to hear from you. Fill out the form and I'll get back to you as soon as possible.</p>
        <div className="contact-info-list"><div className="contact-info-item"><div className="contact-info-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg></div><div className="contact-info-text"><span className="contact-info-label">Phone</span><span className="contact-info-value">+94 76 984 5424</span></div></div><div className="contact-info-item"><div className="contact-info-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg></div><div className="contact-info-text"><span className="contact-info-label">Email</span><span className="contact-info-value">dumindudinusara2003@gmail.com</span></div></div><div className="contact-info-item"><div className="contact-info-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" /></svg></div><div className="contact-info-text"><span className="contact-info-label">Address</span><span className="contact-info-value">10A, Kamburupitiya, Matara, Sri Lanka.</span></div></div></div>
      </div>
      <div className="contact-right">
        <div className="contact-form-card">
          <h3 className="contact-form-title">Contact <span>Me!</span></h3>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-grid">
              <input type="text" className="form-input" name="fullName" placeholder="Full Name" aria-label="Full name"
                required maxLength={100} value={form.fullName} onChange={update}/>
              <input type="email" className="form-input" name="email" placeholder="Email Address" aria-label="Email address"
                required maxLength={254} value={form.email} onChange={update}/>
              <input type="tel" className="form-input" name="phone" placeholder="Phone Number (optional)" aria-label="Phone number"
                maxLength={30} value={form.phone} onChange={update}/>
              <input type="text" className="form-input" name="subject" placeholder="Subject" aria-label="Subject"
                required maxLength={150} value={form.subject} onChange={update}/>
            </div>
            <textarea className="form-input form-textarea" name="message" placeholder="Your Message" aria-label="Your message"
              required minLength={5} maxLength={5000} value={form.message} onChange={update}/>
            <div className="form-btn-wrap">
              <button type="submit" className="form-submit" disabled={sending}>{sending ? 'Sending...' : 'Send Message'}</button>
            </div>
            {notice && <p role="status" className={`form-notice ${notice.type}`}>{notice.text}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
