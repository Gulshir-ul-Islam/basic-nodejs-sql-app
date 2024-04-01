# A basic NodeJS + SQL project [Credits] (http://realworld.io)

Setup:

- **Language**	: Javascript
- **Platform**	: NodeJS
- **Framework**	: ExpressJS
- **Database**	: MySQL/SQLite/Postgres
- **ORM**	: Sequelize

## Setup Database

```bash
mysql -u root
```

```mysql-psql
 create database db;
 create user user with password 'pass';
 grant all privileges on db.* to user;
 flush privileges;
```

## Available Scripts

To run the server:
`npm start`