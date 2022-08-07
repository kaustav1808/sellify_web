import { createServer, Model } from 'miragejs';

export function makeServer() {
  let server = createServer({
    models: {
      item: Model,
      user: Model,
    },

    seeds(server) {
      server.create('item', {
        title: 'First Item',
        description: 'First item description',
        price: 200,
      });
      server.create('item', {
        title: 'Second Item',
        description: 'Second item description',
        price: 250,
      });
      server.create('item', {
        title: 'Third Item',
        description: 'Third item description',
        price: 300,
      });

      server.create('user', {
        email: 'kaustavofficial1808@gmail.com',
        id: '62baaa3c3d9f7a4ecdf0de5f',
        username: 'kaustavofficial1808@gmail.com',
      });
    },

    routes() {
      this.urlPrefix = process.env.NEXT_PUBLIC_CLIENT_URL;
      this.namespace = '';

      this.get('/items', (schema) => {
        return schema.items.all();
      });

      this.get('/user', (schema) => {
        return schema.users.first().attrs;
      });

      this.get('/auth/signout', (schema) => {
        return schema.users.all().destroy();
      });

      this.namespace = '';
      this.urlPrefix = '';
      this.passthrough();
    },
  });

  return server;
}
