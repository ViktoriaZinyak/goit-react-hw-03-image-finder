import { Component } from 'react';
import { ImSearch } from 'react-icons/im';

class Searchbar extends Component {
  state = {
    request: '',
  };

  handleInputChange = e => {
    this.setState({ request: e.target.value.trim() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.request.trim() === '') {
      alert('Введите ваш запрос');
      return;
    }
    this.props.onSubmit(this.state.request);
    this.reset();
  };

  reset = () => {
    this.setState({ request: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <ImSearch />
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.request}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
