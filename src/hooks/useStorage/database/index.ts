import * as SQLite from 'expo-sqlite';

const ConnectToDatabase = async ():Promise<void> => {
  const db = SQLite.openDatabase('dbName', '1.0.0');
  const query = `
  create table goals(
    id int primary key auto increment,
    nome varchar(38) not null,
    description varchar(300),
    goal int not null,
    amount int not null,
    date timestamp not null,
    created_at timestamp default now() not null,
    updated_at timestamp default now() not null,
  )`;

  db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () => console.log('Foreign keys turned on'));
  db.exec([{ sql: query, args: [] }], false, () => console.log('Created Goal Table'));
};

export default ConnectToDatabase;
