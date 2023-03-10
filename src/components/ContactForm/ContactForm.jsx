import React, { Component } from 'react';

import PropTypes from 'prop-types';

import style from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleCange = e => {
    const { name, value } = e.target;
    e.target.value && this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="number" className={style.label}>
          Name
        </label>
        <div className={style.form}>
          <input
            className={style.input}
            type="text"
            name="name"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.name}
            onChange={this.handleCange}
            required
          />
          <input
            className={style.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.handleCange}
            required
          />
        </div>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  value: PropTypes.string,
};
