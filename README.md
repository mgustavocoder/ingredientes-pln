# Ingredientes PLN (Processamento de linguagem natural)

Extrai uma lista de tokens à partir de uma lista de ingredientes em linguagem natural retirado de receitas da culinária brasileira.

**Instalação**
```
npm i ingredientes-pln
```

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

*Idealmente os tokens serão ingredientes puros, porém algumas palavras contidas na lista original também podem ser retornados.*
