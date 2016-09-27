const elixir = require('laravel-elixir');
// require('laravel-elixir-vue');
require('laravel-elixir-vueify');
require('laravel-elixir-browserify-official');

elixir(mix => {
  mix.sass('app.scss')
    .browserify('app.js');
});