import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import PixabayApi from 'components/service';
const pixabayApi = new PixabayApi();

// import { Audio } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import PixabayApi from './service';

// const pixabayApi = new PixabayApi();

export class App extends Component {
  state = {
    searchRequest: '',
    page: 1,
    pictures: [],
    loading: false,
    loadMore: false,
  };

  handleSearchRequest = value => {
    this.setState({
      searchRequest: value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchRequest !== this.state.searchRequest ||
      prevState.page !== this.state.page
    ) {
      console.log('fetch');
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      loadMore: !prevState.loadMore,
      page: prevState.page + 1,
    }));

    console.log(this.state.loadMore);
  };

  render() {
    console.log(this.state.searchRequest);
    return (
      <>
        <Searchbar onSubmit={this.handleSearchRequest} />
        {this.state.loading && <p>Загружаем</p>}
        <ImageGallery
          searchRequest={this.state.searchRequest}
          loadMore={this.state.loadMore}
        />
        <ImageGallery pictures={this.state.pictures} />

        {/* {this.state.pictures && <ImageGallery pictures={this.state.pictures} />} */}
        <button type="button" onClick={this.loadMore}></button>
      </>
    );
  }
}
