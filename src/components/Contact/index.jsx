import React from 'react';
import PropTypes from 'prop-types';
import css from './contact.module.css';

const Contact = ({ name, number, deleteEl }) => {
  return (
    <li>
      {name}: {number}
      <button type="button" className={css.deletBtn} onClick={deleteEl}>
        Delete
      </button>
    </li>
  );
};

Contact.protoType = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  deleteEl: PropTypes.func.isRequired,
};

export default Contact;
