import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('✅ Message sent!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-3 pb-2 mb-3">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
        <div className="form-group mb-3">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="subject">Subject:</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            className="form-control"
            value={formData.subject}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            rows="3"
            className="form-control"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
