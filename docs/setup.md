# Setup

Install the following:

* Ruby > 2.3.1 (Install through [rbenv](https://github.com/rbenv/rbenv) to manage multiple versions)
* Node (Install [nvm](https://github.com/creationix/nvm/blob/master/README.md) to manage multiple versions)
* Postgresql 10

Enter the project directory and run these instructions from the terminal to get started:

```bash
bundle install
rails db:create
rails db:setup # Will take time; a lot of dummy data gets initialized here!
npm install
```

To run the project:

```bash
bundle exec rails server
npm start # to update JavaScript files
```

## Potential Issues
<!-- A sanity check for myself when dealing with PostgreSQL on Ubuntu -->

Working in Ubuntu you might encounter the following psql error during setup:

```bash
'FATAL:  role "USERNAME" does not exist'
```

To fix this you need to access postgres from the command line and create a user for your username:

```bash
sudo -u postgres psql # to access postgres from the command line
```

Once in PostgreSQL run the following sql command adding your username in the quotes:

```SQL
  CREATE USER "MISSING_ROLE";
  ALTER USER "MISSING_ROLE" CREATEDB;
```

This will allow you to create a database as intended to run the project on your machine. On Ubuntu you will additionally need to setup your user with a password via `bash ALTER USER MISSING_ROLE PASSWORD _user_password_` to set up the database.

Finally, you must set up rails secrets to run Geocoder and Google Maps. You will need the secrets.yml.key to add API keys. To add secrets:

```bash
  rails secrets:setup
  rails secrets:edit
  EDITOR="__editor_name__ --wait"
```

From there you can add the appropriate keys to rails. To view secrets:

```bash
  rails runner 'puts Rails.application.secrets[.key_name]'
```
