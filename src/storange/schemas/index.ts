import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const Schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'goals',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string', isOptional: true },
        { name: 'total', type: 'number' },
        { name: 'goal', type: 'number' },
        { name: 'date', type: 'number', isOptional: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'managements',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string', isOptional: true },
        { name: 'total', type: 'number' },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'transactions_goal',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'type', type: 'string' },
        { name: 'amount', type: 'number' },
        { name: 'goal_id', type: 'string', isIndexed: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'transactions_management',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'type', type: 'string' },
        { name: 'amount', type: 'number' },
        { name: 'management_id', type: 'string', isIndexed: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
  ],
})
