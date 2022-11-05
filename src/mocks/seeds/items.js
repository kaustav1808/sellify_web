import { faker } from '@faker-js/faker';

const run = (server) => {
  console.log('Running items seed');
  for (let i = 0; i < 100; i++) {
    let sellType = faker.helpers.arrayElement(['range', 'auction']);
    let priceMin = faker.datatype.number({ min: 100, max: 1000 });
    let priceMax = faker.datatype.number({ min: priceMin, max: 10000 });
    let priceOffset = sellType==='auction'? faker.datatype.number({ min: 1, max: 50 }):0;
    let item = {
      id: faker.database.mongodbObjectId(),
      title: faker.commerce.productName(),
      shortDescription: faker.lorem.words(30),
      description: faker.lorem.sentences(10),
      tags: faker.helpers.uniqueArray(
        () => faker.commerce.productAdjective(),
        10,
      ),
      status: faker.helpers.arrayElement(['setteled', 'open']),
      sellType,
      priceMin,
      priceMax,
      priceOffset
    };
    server.create('item', item);
  }
  console.log('Completed items seed');
};

export default run;
