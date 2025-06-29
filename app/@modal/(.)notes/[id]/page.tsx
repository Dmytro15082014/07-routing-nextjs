import Modal from '@/components/Modal/Modal';
import NotePreview from '@/app/@modal/(.)notes/[id]/NotePreview.client';
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
