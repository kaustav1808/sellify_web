import { faker } from '@faker-js/faker';

const run = (server) => {
  console.log('Running user seed');
  for (let i = 0; i < 5; i++) {
    let user = {
      id: faker.database.mongodbObjectId(),
      name: faker.name.fullName(),
      username: faker.unique(faker.name.fullName),
      email: faker.internet.email(),
    };
    server.create('user', user);
  }
  console.log('Completed user seed');
};

export default run;
