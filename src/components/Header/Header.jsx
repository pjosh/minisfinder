import BurgerButton from 'components/BurgerButton';
import Logo from 'components/Logo';
import TagList from 'components/TagList';
import React, { Component } from 'react';
import Modal from 'react-modal';
import styles from './styles.module.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };
  }

  onCloseModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  onShowModal = () => {
    this.setState({
      isModalOpen: true
    });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div className={styles.container}>
        <Logo />
        <BurgerButton onClick={this.onShowModal} />
        <Modal
          className={styles.modal}
          isOpen={isModalOpen}
          onRequestClose={this.onCloseModal}
          portalClassName={styles.modalPortal}
        >
          <TagList />
        </Modal>
      </div>
    );
  }
}

export default Header;
