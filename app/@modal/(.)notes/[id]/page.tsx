import Modal from '@/components/Modal/Modal';
import NotePreview from '@/components/NotePreview/NotePreview';
import { fetchNoteById } from '@/lib/api';

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreviewData = async ({ params }: Props) => {
  const { id } = await params;
  const notePreview = await fetchNoteById(Number(id));

  return (
    <Modal>
      <NotePreview note={notePreview} />
    </Modal>
  );
};

export default NotePreviewData;
