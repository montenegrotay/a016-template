const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

//PRÁTICA GUIADA 01

const megaSena = [
[1, 3, 5, 7], //sorteio 01
[0, 2, 4, 6], //sorteio 02
[4, 8, 12, 18], //sorteio 03
[5, 10, 15, 20] //sorteio 04
]

//if (megaSena.length === 4){
//verificado, contém exatamente 4 resultados.
  
//   for(let i = 0; i < megaSena.length; i++){ //array megaSena
//    //console.log(`sorteio ${i+1}: ${megaSena[i]}`)
//    let sorteio = `sorteio ${i}:`
//
//    for(let j = 0; j < megaSena[i].length; j++){ //array cada sorteio
//     sorteio += megaSena[i][j] + ", "
//      //console.log(megaSena[i][j]) //16 vezes
//      //console.log(j)
//    }
//    console.log(sorteio)
//   }
//
//} else {
//  console.log("É necessário alterar o número de itens do array.")
//}


//PRÁTICA GUIADA 02

if (megaSena.length === 4){
  //verificado, contém exatamente 4 resultados.
    
     for(let i in megaSena){ //array megaSena
      //console.log(`sorteio ${i+1}: ${megaSena[i]}`)
      let sorteio = `sorteio ${Number(i) + 1}: `
  
      for(let j of megaSena[i]){ //array cada sorteio
       sorteio += j + ", "
        //console.log(megaSena[i][j]) //16 vezes
        //console.log(j)
      }
      console.log(sorteio)
     }
  
  } else {
    console.log("É necessário alterar o número de itens do array.")
  }

  //PARA GUARDAR NA CABEÇA

  for (let i = 0; i < filmes.length; i++) {//array filmes
    console.log(`Filme ${i+1}:` )
    console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, digirido por ${filmes[i].diretor}.`)
     

    for(let j of filmes[i].elenco){
      console.log(`Tem no elenco: ${filmes[i].elenco}`)
    }
  
  
  }