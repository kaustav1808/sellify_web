import ItemsSeed from './items';
import UserSeed from './user';

const runSeed = (server) => {
  console.log('Starting the seed');

  ItemsSeed(server);
  UserSeed(server);

  console.log('Completed seed');
};

export default runSeed;
