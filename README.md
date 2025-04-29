Команды для командной строки в сборщике

yarn block - создать папку блока в папке blocks (при создании они автоматически импортируются в layout)

yarn page - создание страницы в папке pages для них используется layout в который подключены хедер и футер



### Настройка config для форматирования scss

- установить расширение Prettier
- добавить в `.settings.json` следующий код:

```
"stylelint.validate": ["css", "less", "postcss", "scss"],
"prettier.singleQuote": true,
"prettier.jsxSingleQuote": true,
"prettier.semi": false,
"[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
"[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
    "source.fixAll.stylelint": "explicit"
  },
```
