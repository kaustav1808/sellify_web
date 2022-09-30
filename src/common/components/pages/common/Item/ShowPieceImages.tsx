import type { NextPage } from 'next';
import { ScriptProps } from 'next/script';
type ImageType = ScriptProps & { width?: number, height?:number };
const ShowPieceImages: NextPage<ImageType> = ({width=400,height=225}) => {
  const getImageUrl = () => {
    return `https://placeimg.com/${width}/${height}/arch`
  }
  return (
    <figure>
      <img src={getImageUrl()} alt="Shoes" />
    </figure>
  );
};

export default ShowPieceImages;
