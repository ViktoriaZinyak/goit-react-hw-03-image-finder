import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
// import { Audio } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import PixabayApi from './service';

// const pixabayApi = new PixabayApi();

export class App extends Component {
  state = {
    searchRequest: '',
    // pictures: null,
    loading: false,
  };

  handleSearchRequest = value => {
    this.setState({
      searchRequest: value,
    });
  };

  // async componentDidUpdate(prevProps, prevState) {

  //   pixabayApi.query = this.state.searchRequest;
  //   pixabayApi.resetPage();
  //   try {
  //     const data = await pixabayApi.fetchPhotos();
  //     console.log(data.hits);
  //     console.log(this.state.pictures);
  //     this.setState({
  //       pictures: data.hits,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  render() {
    console.log(this.state.searchRequest);
    return (
      <>
        <Searchbar onSubmit={this.handleSearchRequest} />
        {this.state.loading && <p>Загружаем</p>}
        <ImageGallery searchRequest={this.state.searchRequest} />
        {/* <ImageGallery pictures={this.state.pictures} /> */}
        {/* {this.state.pictures && <ImageGallery pictures={this.state.pictures} />} */}
      </>
    );
  }
}
