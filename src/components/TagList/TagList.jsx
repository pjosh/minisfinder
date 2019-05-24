import classnames from 'classnames';
import Tag from 'components/Tag';
import tags from 'data/tags';
import { withAppContext } from 'providers/AppProvider';
import React from 'react';
import styles from './styles.module.scss';

const TagList = ({ className, context }) => (
  <div className={classnames(styles.container, className)}>
    {tags.map(category => (
      <ul className={styles.list} key={category.name}>
        <div className={styles.category}>{category.name}</div>
        {category.tags.map(tag => (
          <li key={tag.id}>
            <Tag selected={context.tagsSelected.includes(tag.id)} tag={tag} />
          </li>
        ))}
      </ul>
    ))}
  </div>
);

export default withAppContext(TagList);
