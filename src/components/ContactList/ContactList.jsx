import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = ({ contacts, filter, deleteContact }) => {
  const filteredContacts = () =>
    contacts?.filter(contact =>
      contact?.name?.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <ol>
      {filteredContacts()?.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <div className={style.item}>
              {name}: {number}
              <button
                className={style.button}
                type="button"
                onClick={() => deleteContact(id)}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ol>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ContactList;
