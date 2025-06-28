import { fetchNotes } from '../../../../lib/api';
import NotesClient from './Notes.client';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const App = async ({ params }: Props) => {
  const { slug } = await params;
  const decodeTag = decodeURIComponent(slug?.[0] || '');
  const tag = decodeTag === 'All notes' ? undefined : slug?.[0];

  const data = await fetchNotes('', 1, tag);

  return (
    <>
      <NotesClient items={data} />
    </>
  );
};

export default App;
