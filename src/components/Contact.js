import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Contact = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
      validate={(values) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const errors = {};
        if (!values.name) {
          errors.name = 'Name Required';
        }
        if (!values.email || !emailRegex.test(values.email)) {
          errors.email = 'Valid Email Required';
        }
        if (!values.message) {
          errors.message = 'Message Required';
        }
        return errors;
      }}
    >
      {() => (
        <div className='contact-section'>
          <div className='contact-page'>
            <h3 className='title'>Contact Us</h3>
            <Form>
              <div className='input-section'>
                <label htmlFor='name'>Name: </label>
                <div className='input'>
                  <Field name='name' className='input-box' />
                </div>
                <div className='error'>
                  <ErrorMessage name='name' />
                </div>
              </div>

              <div className='input-section'>
                <label htmlFor='email'>Email: </label>
                <div className='input'>
                  <Field name='email' className='input-box' />
                </div>
                <div className='error'>
                  <ErrorMessage name='email' />
                </div>
              </div>

              <div className='input-section'>
                <label htmlFor='message'>Message: </label>
                <div className='input'>
                  <Field
                    name='message'
                    component='textarea'
                    className='input-box'
                  />
                </div>
                <div className='error'>
                  <ErrorMessage name='message' />
                </div>
              </div>

              <button className='contact-btn'>Send</button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Contact;
