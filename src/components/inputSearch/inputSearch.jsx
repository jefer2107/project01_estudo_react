import './inputSearch.css';
import p from 'prop-types';

export const InputSearch = (props) => {
  const { searchValue, handleSearch } = props;

  return (
    <input
      placeholder={'Type your search'}
      className="input-search"
      value={searchValue}
      onChange={handleSearch}
      type="search"
    />
  );
};

InputSearch.prototype = {
  searchValue: p.string.isRequired,
  handleSearch: p.func.isRequired,
};
