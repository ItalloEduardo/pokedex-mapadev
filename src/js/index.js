
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