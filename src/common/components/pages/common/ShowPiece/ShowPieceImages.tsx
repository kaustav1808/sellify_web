import type { NextPage } from 'next';

const ShowPieceImages: NextPage = () => {
  return (
    <div className="h-80 carousel carousel-vertical rounded-box">
      <div className="carousel-item h-full">
        <img src="https://api.lorem.space/image/game?w=256&h=400&hash=8B7BCDC2" />
      </div>
      <div className="carousel-item h-full">
        <img src="https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB" />
      </div>
      <div className="carousel-item h-full">
        <img src="https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6" />
      </div>
      <div className="carousel-item h-full">
        <img src="https://api.lorem.space/image/game?w=256&h=400&hash=225E6693" />
      </div>
      <div className="carousel-item h-full">
        <img src="https://api.lorem.space/image/game?w=256&h=400&hash=9D9539E7" />
      </div>
      <div className="carousel-item h-full">
        <img src="https://api.lorem.space/image/game?w=256&h=400&hash=BDC01094" />
      </div>
      <div className="carousel-item h-full">
        <img src="https://api.lorem.space/image/game?w=256&h=400&hash=7F5AE56A" />
      </div>
    </div>
  );
};

export default ShowPieceImages;
