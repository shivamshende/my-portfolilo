import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        subject: '',
        message: '',
        name: '',
        replyTo: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = 'https://mail-sender-api1.p.rapidapi.com/';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '30a8fbf5ccmshe82b868a3d0a85dp15f4aejsne52a84ac119b',
                'X-RapidAPI-Host': 'mail-sender-api1.p.rapidapi.com'
            },
            data: {
                sendto: 'shivamshende200@gmail.com',
                name: formData.name,
                replyTo: formData.replyTo,
                ishtml: 'false',
                title: formData.subject,
                body: formData.message
            }
        };

        try {
            const response = await axios(url, options);
            console.log('Email sent:', response.data);
            // alert('Email sent successfully!');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email. Please try again.');
        }
    };

    return (
        <div className="contact-container">
            <div className='contact'>
                <Link className='back' to="/"><FontAwesomeIcon icon={faArrowLeft} size="lg" /></Link>
                <div className="contact-details">
                    <p><strong>Phone:</strong> +91 7263057752</p>
                    <p><strong>Email ID:</strong> shivamshende200@gmail.com</p>
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shivam-shende-b8b121250/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                </div>

                <div className="contact-content">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="replyTo"
                                placeholder="Your Email"
                                value={formData.replyTo}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">SEND</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;