import Cursor from 'pg-cursor';

import { Pool } from 'pg';
import { conf } from '../common/conf';
import { Kysely, PostgresDialect } from 'kysely';
import { DB } from '../../prisma/generated/types';

export const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool: new Pool({
      port: conf.db.port,
      host: conf.db.host,
      user: conf.db.username,
      password: conf.db.password,
      database: conf.db.database,
    }),
    cursor: Cursor,
  }),
});
