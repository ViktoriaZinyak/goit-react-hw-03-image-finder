const ImageGallery = ({ pictures }) => {
  return (
    <ul className="gallery">
      {pictures.map(picture => (
        <li key={picture.id} className="gallery-item">
          <img src={picture.webformatURL} alt="" />
        </li>
      ))}
    </ul>
  );
};
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.pictures !== this.props.pictures) {
//     }
//   }

//   async componentDidUpdate(prevProps, prevState) {
//     if (prevProps.searchRequest !== this.props.searchRequest) {
//       pixabayApi.query = this.props.searchRequest;
//       pixabayApi.resetPage();
//       try {
//         const data = await pixabayApi.fetchPhotos();
//         console.log(data.hits);
//         this.setState({
//           pictures: data.hits,
//         });
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     if (prevProps.loadMore !== this.props.loadMore) {
//       try {
//         const data = await pixabayApi.fetchPhotos();
//         console.log(data.hits);
//         this.setState(prevState => ({
//           pictures: [...data.hits, ...prevState.pictures],
//         }));
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   }

//   render() {
//     return (
//       <ul className="gallery">
//         {this.props.pictures.map(picture => (
//           <li key={picture.id} className="gallery-item">
//             <img src={picture.pageURL} alt="" />
//           </li>
//         ))}
//       </ul>
//     );
//   }

export default ImageGallery;
