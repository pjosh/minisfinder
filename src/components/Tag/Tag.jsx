import { withAppContext } from 'providers/AppProvider';
import React, { Component } from 'react';
import styles from './styles.module.scss';

class Tag extends Component {
  onClick = () => {
    const {
      context,
      tag: { id }
    } = this.props;

    context.toggleTagSelected(id);
  };

  render() {
    const {
      selected,
      tag: { name, description }
    } = this.props;
    return (
      <button
        className={`${styles.container} ${selected ? styles.selected : ''}`}
        type="button"
        onClick={this.onClick}
      >
        {name}
        <span className={styles.description}>{description ? `(${description})` : ''}</span>
      </button>
    );
  }
}

export default withAppContext(Tag);
