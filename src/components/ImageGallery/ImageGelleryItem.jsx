import { Component } from 'react';
import css from './ImageGallery.module.css';
import Modal from './Modal';

export class ImageGalleryItem extends Component {
  state = {
    modalShow: false,
  };

  openLargeImg = () => {
    this.setState({
      modalShow: true,
    });
  };

  render() {
    return (
      <>
        <li className={css.ImageGalleryItem}>
          <img
            src={this.props.picture.webformatURL}
            alt=""
            onClick={this.openLargeImg}
            className={css.ImageGalleryItem__image}
          />
        </li>
        {this.state.modalShow && (
          <Modal largeImg={this.props.picture.largeImageURL} />
          // <div className="overlay">
          //   <div className="modal">
          //     <img src={this.props.picture.largeImageURL} alt="" />
          //   </div>
          // </div>
        )}
      </>
    );
  }
}
