import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact/index';

const ContactList = ({ contactArrey, onDeleteEl }) => {
  return (
    <ul>
      {contactArrey.map(({ uId, name, number }) => {
        return (
          <Contact
            key={uId}
            name={name}
            number={number}
            deleteEl={() => onDeleteEl(uId)}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactArrey: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteEl: PropTypes.func.isRequired,
};
export default ContactList;
