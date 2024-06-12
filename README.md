# 📌 Skin Scan API

## 📍 Implemented

- [x] Linter.
- [x] Formatter.
- [x] Git Automation.

## ⚡️ Getting Started

### ⚙️ Ensure environment are set

Example how to create environment

```shell
cp .env.example .env
```

### 🚚 How to run and build app

Example how to start development application

```shell
yarn install
yarn start:dev
```

Example how to run build application

```shell
yarn install
yarn build
yarn start:prod
```

### ↕️ How to do migrations

Example how to executes database migrations to apply pending schema changes

```shell
yarn migrate:up
```

Example how to reverts the most recent database migration, undoing schema changes

```shell
yarn migrate:down
```

### ⛑️ How to check and fixing formatting issues

Example how to check formatting issues without modifying files

```shell
yarn prettier:check
```

Example how to check and fixing formatting issues by modifying files

```shell
yarn prettier:fix
```
