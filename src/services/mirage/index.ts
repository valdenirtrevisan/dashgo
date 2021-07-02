/* eslint-disable import/no-extraneous-dependencies */
import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer,
  Server,
} from 'miragejs';
import faker from 'faker';

type User = {
  name: string;
  email: string;
  createdAt: string;
};

export function makeServer(): Server {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(serverV) {
      serverV.createList('user', 200);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users', function findAll(schema, req) {
        const { page = 1, perPage = 10 } = req.queryParams;

        const total = schema.all('user').length;

        const pageStart = (Number(page) - 1) * Number(perPage);
        const pageEnd = pageStart + Number(perPage);

        const users = this.serialize(schema.all('user')).users.slice(
          pageStart,
          pageEnd
        );

        return new Response(200, { 'x-total-count': String(total) }, { users });
      });

      this.get('/users/:id');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
