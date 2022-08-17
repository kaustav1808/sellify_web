import { createServer, Model } from 'miragejs';
import runSeed from './seeds';

export function makeServer() {
  let server = createServer({
    models: {
      items: Model,
      users: Model,
    },

    seeds(server) {
      runSeed(server);
    },

    routes() {
      this.urlPrefix = process.env.NEXT_PUBLIC_CLIENT_URL;
      this.namespace = '';

      this.get('/items', (schema) => {
        return schema.items.all();
      });

      this.post('/items', (schema, request) => {
        schema.db.items.insert(JSON.parse(request.requestBody));
        return { message: 'success' };
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
