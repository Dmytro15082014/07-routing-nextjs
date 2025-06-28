import css from '../../../../components/SidebarNotes/SidebarNotes.module.css';

const SidebarNotes = async () => {
  const allTag = [
    'All notes',
    'Todo',
    'Work',
    'Personal',
    'Meeting',
    'Shopping',
  ];
  return (
    <ul className={css.menuList}>
      {allTag.map(tag => (
        <li key={tag} className={css.menuItem}>
          <a href={`/notes/filter/${tag}`} className={css.menuLink}>
            {tag}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SidebarNotes;
