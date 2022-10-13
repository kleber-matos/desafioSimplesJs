/*

1 - Preço da gasolina;
2 - preço do etanol;
3 - O tipo de combustivel que esta no seu carro;
4 - Gasto medio de combustivel do carro por Km;
5 - Distancia em Km da viagem;

*/

//preços
const precoGasolina = 7.80;
const precoEtanol = 4.35;
const kmPorLitro = 10;
const distanciaDaViagem = 100;
const gasolina = distanciaDaViagem / kmPorLitro * (precoGasolina).toFixed(2);
const etanol = distanciaDaViagem / kmPorLitro * (precoEtanol).toFixed(2);

//tipos
const tipo = etanol

if (tipo === gasolina) {
    console.log(`Com gasolina o gasto foi R$ ${gasolina}`)
}
if (tipo === etanol) {
    console.log(`Com etanol o gasto foi R$ ${etanol}`)
}

