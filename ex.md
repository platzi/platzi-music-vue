# Branch Brief

## Temas

1. Introduccion a linters y eslint
2. Introduccion a standardjs
3. Instalacion de eslint con standardjs


## Links

[eslint](http://eslint.org/)
[standardjs](https://standardjs.com/)
[eslint-standard-config](https://github.com/feross/eslint-config-standard)


## Practica

1. Instalar eslint

```bash
$ npm i -D eslint
```

2. Instalar eslint-config-standard
```bash
$ npm i -D eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

3. Crear archivo `.eslintrc`

```bash
touch .eslintrc
```

4. Configurar eslint para utilizar standardjs, escribir el siguente contenido en `.eslintrc`:

```json
{
  "extends": "standard"
}
```
5. Customizar eslint deshabilitando la regla `no-new` (establecida por standardjs):

```json
{
  "extends": "standard",

  "rules": {
    "no-new": 0
  }
}
```
