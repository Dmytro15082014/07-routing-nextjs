import { fetchNotes } from '../../../../lib/api';
import NotesClient from './Notes.client';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const App = async ({ params }: Props) => {
  const { slug } = await params;

  const tag = slug[0] !== 'Notes' ? slug[0] : undefined;
  console.log(tag);

  const data = await fetchNotes('', 1, tag);

  return (
    <>
      <NotesClient items={data} />
    </>
  );
};

export default App;
