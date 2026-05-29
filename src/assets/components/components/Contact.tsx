import React, { useState, useRef } from 'react';
import type { FormEvent } from 'react'; 
import emailjs from '@emailjs/browser';
import './Contact.css';

interface FormDataState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormDataState>({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_l4a68tc"; 
    const templateId = "template_4rvnyn"; 
    const publicKey = "R-7i1lFErFsJks3Rg"; 

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
         alert("Xabaringiz emailingizga muvaffaqiyatli yuborildi! 🚀");
         setFormData({ name: '', email: '', message: '' });
         setLoading(false);
      })
      .catch((error) => {
         console.error("Xatolik tafsiloti:", error);
         alert("Xatni yuborishda xatolik bo'ldi, qaytadan urinib ko'ring.");
         setLoading(false);
      });
  };

  return (
    <div className="contact-section fade-in-up">
      <div className="contact-container">
        
        {/* Chap tomon: Aloqa ma'lumotlari */}
        <div className="contact-info-block">
          <div className="contact-header-mini">
            <span className="badge">GET IN TOUCH</span>
            <h2>Let's Talk!</h2>
            <p>Sizda biror loyiha yoki taklif bormi? Menga yozing yoki aloqaga chiqing.</p>
          </div>

          <div className="info-links-list">
            <div className="info-link-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <span>Location</span>
                <p>Xorazm, O'zbekiston</p>
              </div>
            </div>

            <div className="info-link-item">
              <div className="info-icon">📧</div>
              <div className="info-text">
                <span>Email Me</span>
                <p>sharifbayevao8@gmail.com</p>
              </div>
            </div>

            <div className="info-link-item">
              <div className="info-icon">📞</div>
              <div className="info-text">
                <span>Call Me</span>
                <p>+998 94 948 08 13</p>
              </div>
            </div>
          </div>

          <div className="social-media-wrapper">
            <h4>Follow Me</h4>
            <div className="social-icons-row">
              <a href="#" className="social-btn">TG</a>
              <a href="#" className="social-btn">LN</a>
              <a href="#" className="social-btn">GH</a>
              <a href="#" className="social-btn">IG</a>
            </div>
          </div>
        </div>

        {/* O'ng tomon: Xat yuborish formasi */}
        <div className="contact-form-block">
          <form ref={formRef} onSubmit={handleSubmit} className="modern-form">
            <div className="form-group">
              <label>Your Name</label>
              <input 
                type="text" 
                placeholder="Ismingizni kiriting" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
              />
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input 
                type="email" 
                placeholder="Email manzilingiz" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required 
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea 
                rows={4} 
                placeholder="Loyihangiz haqida yozing..." 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-send-message" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <span className="send-icon">🚀</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;