import type { NextPage } from 'next';
import { ScriptProps } from 'next/script';
type ImageType = ScriptProps & { width?: number; height?: number };
const ShowPieceImages: NextPage<ImageType> = ({
  width = 400,
  height = 225,
}) => {
  const getImageUrl = () => {
    return `https://picsum.photos/${width}/${height}`;
  };
  return (
    <figure>
      <img src={getImageUrl()} alt="Shoes" className="h-full w-full object-cover" />
    </figure>
  );
};

export default ShowPieceImages;
