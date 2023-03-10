import PropTypes from 'prop-types';
const Filter = ({ value, setFilter }) => {
  return (
    <input
      onChange={e => {
        setFilter(e.target.value);
      }}
      className={''}
      type="text"
      name="name"
      title="Contacts"
      value={value}
    />
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
export default Filter;
