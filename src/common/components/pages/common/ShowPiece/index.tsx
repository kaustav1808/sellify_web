import ShowPieceImages from './ShowPieceImages';
import type { NextPage } from 'next';

const ShowPiece: NextPage = () => {
  return (
    <div className="artboard artboard-horizontal h-100 w-150 p-2 rounded-lg bg-neutral-focus">
      <ShowPieceImages />
       </div>
  );
};

export default ShowPiece;
