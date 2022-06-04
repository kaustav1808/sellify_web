import { NextPage } from 'next';
import Navbar from '../pages/common/Navbar';

const Main: NextPage = (props: any) => {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Main;
