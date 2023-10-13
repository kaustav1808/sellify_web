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

      this.get('/items', (schema, request) => {
        let items = schema.items.all();
        if (request.queryParams.type === 'all') return items;
        items = items.filter(
          (item) => item.status === request.queryParams.type,
        );

        return items;
      });

      this.get('/item/:id', (schema, request) => {
        let items = schema.items.all();
        items = items.models.filter((item) => item.id === request.params.id);

        return { data: items.length ? items[0] : {} };
      });

      this.post('/items', (schema, request) => {
        const params = JSON.parse(request.requestBody);
        const date = new Date();
        params.status = "OPEN";
        params.createdAt = date;
        params.updatedAt = date;
        schema.db.items.insert(params);
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
