# setup the project

```
    git clone ...
    npx sequelize-cli init
    PORT:<port number of your choice>
```

- Inside the `src/config` folder create a file named as `config.json` and write the followind code

```
{
  "development": {
    "username": "root",
    "password": "root",
    "database": "database_development",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "localhost",
    "dialect": "mysql"
  }
}
```

## model create command.

```
npx sequelize model:generate --name City --attributes name:string
npx sequelize migration:generate --name update-city-airport-association
```

```
Sequelize CLI [Node: 10.21.0, CLI: 6.0.0, ORM: 6.1.0]

sequelize <command>

Commands:
  sequelize db:migrate                        Run pending migrations
  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize db:migrate:status                 List the status of all migrations
  sequelize db:migrate:undo                   Reverts a migration
  sequelize db:migrate:undo:all               Revert all migrations ran
  sequelize db:seed                           Run specified seeder
  sequelize db:seed --seed my_seeder_file.js  Selected File for seeder
  sequelize db:seed:undo                      Deletes data from the database
  sequelize db:seed:all                       Run every seeder
  sequelize db:seed:undo:all                  Deletes data from the database
  sequelize db:create                         Create database specified by configuration
  sequelize db:drop                           Drop database specified by configuration
  sequelize init                              Initializes project
  sequelize init:config                       Initializes configuration
  sequelize init:migrations                   Initializes migrations
  sequelize init:models                       Initializes models
  sequelize init:seeders                      Initializes seeders
  sequelize migration:generate                Generates a new migration file      [aliases: migration:create]
  sequelize model:generate                    Generates a model and its migration [aliases: model:create]
  sequelize seed:generate                     Generates a new seed file           [aliases: seed:create]

  npx sequelize model:generate --name City --attributes name:string

Options:
  --version  Show version number                                                  [boolean]
  --help     Show help                                                            [boolean]

Please specify a command
```

### Search foreign key contraint in mysql table

```javascript
select * from INFORMATION_SCHEMA.KEY_COLUMN_USAGE WHERE TABLE_NAME = "airports" AND CONSTRAINT_SCHEMA = "flights";
```
