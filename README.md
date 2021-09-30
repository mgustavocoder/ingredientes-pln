## Descrição:
Extrai tokens de uma lista de ingredientes em linguagem natural tirado de receitas da culinária brasileira.

**Required**
```
node version > 12 
```

**NPM**
https://www.npmjs.com/package/ingredientes-pln

```
npm i ingredientes-pln
```

**Github**
https://github.com/mgustavocoder/ingredientes-pln

**Uso**
```
const processarIngredientes = require('ingredientes-pln')

const tokens = processarIngredientes([...])
``` 


**Exemplo de entrada:**

```
[ 
    '2 xícaras (chá) de leite',
    '1 lata de creme de leite (300g)',
    'Sal, pimenta-do-reino, noz-moscada ralada e orégano a gosto',
    '1kg de batata descascada em fatias',
    '200g de queijo muçarela ralado',
    '1 tomate picado',
    '150g de presunto ou apresuntado em cubos',
    'Margarina para untar"
]
```
**Exemplo de saída:**
```
[
  "leite',
  "sal',
  "pimenta-do-reino',
  "noz-moscada',
  "orégano',
  "batata',
  "queijo',
  "muçarela',
  "tomate',
  "presunto',
  "apresuntado',
  "margarina"
]
```
