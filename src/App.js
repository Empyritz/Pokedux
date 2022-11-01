import { useEffect } from 'react';
import { Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { getPokemons } from './api/index'
import { getPokemonsWithDetails } from './actions/index'
import './App.css';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import logo from './statics/logo.svg'
// import { setPokemons } from './actions';

function App() {
  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons()
      // const pokemonDetails = await Promise.all(pokemonsRes.map(pokemon => getPokemonDetails(pokemon)))
      // dispatch(setPokemons(pokemonDetails))
      // console.log(pokemonsRes)
      dispatch(getPokemonsWithDetails(pokemonsRes))
    }   
    console.log('render')
    fetchPokemons()
 
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}


export default App