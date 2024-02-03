module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  tabWidth: 2, // Ancho del tab es 2
  semi: true, // Uso de ; obligatorio
  singleQuote: true, // uso de comillas simples obligatorio
  useTabs: false, // Espacios de identación no son de tipo tab.
  trailingComma: 'all', // Agregar una coma al definir la última propiedad de un arreglo.
  bracketSpacing: true, // Imprime espacios entre corchetes en literales de objetos.
};
