# rails-react-ts-sample

Rails × React × TypeScriptで何か作る際の雛形となるサンプルアプリ。

## セットアップ

### Railsアプリを作成（APIモード）
```
$ docker-compose run api rails new . --force --no-deps -d mysql --api
```

### backend/config/databse.ymlを編集
```yml
default: &default
  adapter: mysql2
  encoding: utf8
  pool: <%= ENV.fetch('RAILS_MAX_THREADS') { 5 } %>
  username: root
  password: password
  host: db

development:
  <<: *default
  database: myapp_development
```

### Reactアプリを作成
```
$ docker-compose build
$ docker-compose run front sh -c 'npx create-react-app react-app --template typescript'
```
### コンテナを起動

```
$ docker-compose up -d
$ docker-compose run api bundle exec rake db:create
```


### ブラウザを確認

「localhost:3000」「localhost:8000」へアクセスし、それぞれRailsアプリとReactアプリの画面が表示されていれば成功。

#### localhost:3000

![スクリーンショット 2020-12-21 6 19 20](https://user-images.githubusercontent.com/51913879/102724680-94eff600-4354-11eb-8485-d964b0ee48e3.png)

#### localhost:8000

![スクリーンショット 2020-12-24 1 30 43](https://user-images.githubusercontent.com/51913879/103098263-8011ac00-464d-11eb-9c3c-6a9399cf113d.png)

