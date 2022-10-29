import PokemonCard from "./PokemonCard";
import './PokemonList.css'

const defaultProps = Array(10).fill('')

const PokemonList = ({ pokemons = defaultProps }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon, index) => {
        return <PokemonCard key={pokemon.name} name={pokemon.name}/>
      })}
    </div>
  )
}

// PokemonList.defaultProps = {
//   pokemons: Array(10).fill(''),
// }

export default PokemonList