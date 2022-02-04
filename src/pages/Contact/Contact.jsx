import React from 'react';
import './Contact.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const schema = yup
  .object({
    lastName: yup.string().max(20).required('Please enter your last name'),
    firstName: yup.string().max(20).required('Please enter your first name'),
    email: yup
      .string()
      .email('Must be a valid email')
      .max(255)
      .required('Please enter a valid email address'),
    message: yup.string().max(200).required('Please enter a message'),
  })
  .required();

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data, r) => {
    alert(
      'Your message has been sent and will be processed as soon as possible!'
    );
    const templateId = 'template_8ed58w8';
    const serviceId = 'service_lu1lv3a';
  };

  return (
    <main className="main-contact">
      <div className="lightgreen-bloc">
        {' '}
        <img src={logo} alt="" className="logo" />
      </div>
      <Link to="/">
        <button>Home</button>{' '}
      </Link>
      <section className="contactform">
        <h2 className="h2-contact">Contact Us</h2>
        <p className="p-contact">
          Our team will be happy to answer your suggestions!
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-entry">
            <label htmlFor="name">Last Name :</label>
            <input
              type="text"
              id="name"
              name="lastname"
              placeholder="lastName *"
              autoComplete="off"
              {...register('lastName')}
            />
            {errors.lastName && <p id="p-yup">{errors.lastName.message}</p>}
          </div>
          <div className="form-entry">
            <label htmlFor="name">First Name :</label>
            <input
              type="text"
              id="name"
              name="firstname"
              placeholder="firstName *"
              autoComplete="off"
              {...register('firstName')}
            />
            {errors.firstName && <p id="p-yup">{errors.firstName.message}</p>}
          </div>
          <div className="form-entry">
            <div>
              <label htmlFor="email">Email :</label>
            </div>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email *"
              autoComplete="off"
              {...register('email', {
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              })}
            />
            {errors.email && <p id="p-yup">{errors.email.message}</p>}
          </div>

          <div className="form-message">
            <label htmlFor="message"> Your message :</label>
            <textarea
              placeholder="Please fill in your questions or comments"
              id="messagecontact"
              name="message"
              {...register('message')}
            ></textarea>
            {errors.message && <p id="p-yup">{errors.message.message}</p>}
          </div>
          <button id="buttonContact" type="submit" value="Submit">
            Send
          </button>
        </form>
        <div className="form-message-contact"></div>
      </section>
    </main>
  );
};

export default Contact;
