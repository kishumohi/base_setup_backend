# setup the project

- choose port of your choice

```
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

## pending 24.52
