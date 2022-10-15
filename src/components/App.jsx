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
    this.setState(prevState => ({
      page: 1,
      searchRequest: value,
      pictures: [],
      loading: !prevState.loading,
    }));
    // this.setState({
    //   page: 1,
    //   searchRequest: value,
    //   pictures: [],
    //   loading: true,
    // });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchRequest !== this.state.searchRequest ||
      prevState.page !== this.state.page
    ) {
      console.log('fetch');
      pixabayApi.query = this.state.searchRequest;
      prevState.page !== this.state.page
        ? (pixabayApi.appPage = this.state.page)
        : pixabayApi.resetPage();
      // pixabayApi.resetPage();
      // pixabayApi.appPage = this.state.page;
      try {
        const data = await pixabayApi.fetchPhotos();
        console.log(data.hits);
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...data.hits],
          loading: !prevState.loading,
          loadMore: true,
        }));
        console.log(this.state.pictures);
      } catch (error) {
        console.error(error);
      }
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      // loadMore: !prevState.loadMore,
      page: prevState.page + 1,
    }));

    console.log(this.state.loadMore);
  };

  render() {
    console.log(this.state.pictures);
    return (
      <>
        <Searchbar onSubmit={this.handleSearchRequest} />
        {this.state.loading && <p>Загружаем</p>}
        <ImageGallery pictures={this.state.pictures} />
        {/* {this.state.pictures.map(picture => (
            <li key={picture.id} className="gallery-item">
              <img src={picture.webformatURL} alt="" />
            </li>
          ))} */}

        {/* <ImageGallery pictures={this.state.pictures} /> */}

        {/* {this.state.pictures && <ImageGallery pictures={this.state.pictures} />} */}
        {this.state.loadMore && (
          <button type="button" onClick={this.loadMore}>
            Load more
          </button>
        )}
      </>
    );
  }
}
