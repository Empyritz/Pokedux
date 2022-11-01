import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getPokemons } from './api/index'
import { getPokemonsWithDetails, setLoading } from './actions/index'
import './App.css';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import logo from './statics/logo.svg'
// import { toJS } from 'immutable'
// import { setLoading } from './actions/index';

function App() {
  // const pokemons = useSelector(state => state.pokemons)
  const pokemons = useSelector(state => state.getIn(['data', 'pokemons'], shallowEqual)).toJS()
  const loading = useSelector(state => state.getIn(['ui', 'loading']))
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true))
      const pokemonsRes = await getPokemons()
      // const pokemonDetails = await Promise.all(pokemonsRes.map(pokemon => getPokemonDetails(pokemon)))
      // dispatch(setPokemons(pokemonDetails))
      // console.log(pokemonsRes)
      dispatch(getPokemonsWithDetails(pokemonsRes))
      dispatch(setLoading(false))
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
      {loading ? 
      (<Col offset={12}>
        <Spin spinning size='large' style={{ marginTop: '33px' }}/>
      </Col>)
      : (<PokemonList pokemons={pokemons} />)}
    </div>
  );
}


export default App