import React, { Component } from 'react';
import css from './form.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

class Form extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    arrayContact: PropTypes.array.isRequired,
  };
  state = {
    number: '',
    name: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const uId = nanoid();
    const eventNameValue = e.target[0].value;
    const filterName = this.props.arrayContact.find(
      e => e.name === eventNameValue
    );

    filterName
      ? alert(`${eventNameValue} is already in Contacts`)
      : this.props.addContact({ uId, ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ number: '', name: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={css.form}>
          <h2>Name</h2>
          <input
            className={css.form}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />

          <h2>Number</h2>
          <input
            className={css.form}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />

          <button type="submit" className={css.button}>
            Add contact
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
