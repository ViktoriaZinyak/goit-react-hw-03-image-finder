import css from './Modal.module.css';

const Modal = ({ largeImg }) => {
  return (
    <div className={css.Overlay}>
      <div className={css.Modal}>
        <img className={css.ModalImg} src={largeImg} alt="" />
      </div>
    </div>
  );
};

export default Modal;
