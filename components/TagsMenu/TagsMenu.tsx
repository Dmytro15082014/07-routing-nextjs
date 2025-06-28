'use client';
import css from './TagsMenu.module.css';

export const TagsMenu = () => {
  const allTag = ['Notes', 'Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];
  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>
        <a href={`/notes`}> Notes ▾</a>
      </button>
      <ul className={css.menuList}>
        {allTag.map(tag => (
          <li key={tag} className={css.menuItem}>
            <a href={`/notes/filter/${tag}`} className={css.menuLink}>
              {tag}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
