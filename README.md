# Авторизация через ВК NestJS + React

Пример реализованной авторизации по способу Authorization code flow на примере NestJS + React.

[Статья](https://medium.com/@ndrwbv/%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-%D0%B2%D0%BA-nestjs-react-797ff4e36154)

# Установка

```
git clone git@github.com:ndrwbv/vk-auth-react-nestjs.git
cd vk-auth-react-nestjs
```

## Backend

```bash
$ vk-auth-react-nestjs: cd backend
$ vk-auth-react-nestjs/backend: docker-compose up -d
$ vk-auth-react-nestjs/backend: yarn
$ vk-auth-react-nestjs/backend: yarn dev
```

## Frontend

```bash
$ vk-auth-react-nestjs: cd frontend
$ vk-auth-react-nestjs/frontend: yarn
$ vk-auth-react-nestjs/frontend: yarn dev
```

# Настройка

Для работы с вашим приложением необходимо:

1. Создать приложение во Вконтакте https://vk.com/editapp?act=create
2. Отредактировать файлы .env в папке frontend и backend

```bash
frontend/.env: REACT_APP_CLIENT_ID -- ID приложения
backend/.env: CLIENT_ID -- ID приложения
backend/.env: CLIENT_SECRET -- Защищённый ключ
```
