
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartaoPokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value
        
        const idCartaoPokemonParaAbrir = 'cartao' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')


        const botaoPokemonAtivo = document.querySelector('.ativo')
        botaoPokemonAtivo.classList.remove('ativo')

        const botaoASerAtivado = document.getElementById(idPokemonSelecionado)
        botaoASerAtivado.classList.add('ativo')
    })
})
// TENHO QUE APRENDER JS LOGO AF 

// document.addEventListener('keydown', function(event) {
//     const key = event.key; 
    
//     switch (event.key) { 
//       case "ArrowUp":
//           console.log("ta funfando pra cima")
//           break;
//       case "ArrowDown":
//           console.log("ta funfando pra baixo")
//           break;
//      }
// });