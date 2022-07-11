import React from 'react';
import PropTypes from 'prop-types';
import css from './searchForm.module.css';

const SearchForm = ({ onChange }) => (
  <label className={css.formLabel}>
    Find Contacts by Name
    <input type="text" onChange={onChange} />
  </label>
);

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default SearchForm;
