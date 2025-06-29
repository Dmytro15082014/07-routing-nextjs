'use client';
import { useRouter } from 'next/navigation';
import css from './NotePreview.module.css';
import { Note } from '@/types/note';
import useEscapeClose from '@/hooks/useEscapeClose';

type Props = {
  note: Note;
};

const NotePreview = ({ note }: Props) => {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };
  useEscapeClose(handleClose);

  return (
    <div className={css.container}>
      <div className={css.item}>
        <button className={css.backBtn} onClick={handleClose}>
          ← Back
        </button>

        <div className={css.header}>
          <h2>{note.title}</h2>
          <span className={css.tag}>{note.tag}</span>
        </div>

        <p className={css.content}>{note.content}</p>

        <p className={css.date}>{note.createdAt}</p>
      </div>
    </div>
  );
};

export default NotePreview;
