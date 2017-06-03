# Branch Brief

## Temas

1. Introduccion a sass y preprocesadores
2. Configuracion de sass y demostracion


## Links

[sass](http://sass-lang.com)
[sass-loader](https://github.com/webpack-contrib/sass-loader)


## Practica

1. Crear `./scss/main.scss`

```bash
$ touch scss/main.scss
```

2. Cambiar configuracion webpack
```javascript

rules: [
  {
    test: /\.(vue|scss)$/, // solo cambiamos esta linea para que webpack pueda procesar archivos .scss
    loader: 'vue-loader',
    options: {
      loaders: {
        'scss': 'vue-style-loader!css-loader!sass-loader',
        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
      }
    }
  },
```

3. Agregamos algunos estilos de prueba en el archivo `./scss/main.scss`

```css
html {
  color: #fff;
  background: #3d3d3d !important;

  a {
    color: #fff
  }
}
```

4. Instalamos el framework css [bulma]():

```bash
$ npm i -S bulma
```
