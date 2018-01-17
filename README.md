# Coinsage.ru frontend repository

### Постоянная ссылка на рабочу версию

```
http://coinsage.surge.sh/
```

### Подготовка

1. Установить [nvm](https://github.com/creationix/nvm)
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```
2. Установить lts-версию node.js
```
nvm install --lts
```

### Установка зависимостей
В корне папки

```
npm install || yarn
```
### Запуск дев-режима

```
npm start || yarn start
```
### Сбилдить проект

```
npm build || yarn build

```
## Бегает на

* [Yarn](https://yarnpkg.com/en/) — Fast, reliable, and secure dependency management.
* [Blendid](https://github.com/vigetlabs/blendid) — (formerly known as Gulp Starter) is a delicious stand-alone blend of tasks and build tools poured into Gulp to form a full-featured modern asset pipeline.
* [PostCSS](https://rometools.github.io/rome/) — is a tool for transforming styles with JS plugins.
