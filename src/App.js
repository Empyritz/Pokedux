import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import './App.css';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import logo from './statics/logo.svg'
import { fetchPokemonsWithDetails } from './slices/dataSlice';
// import { setLoading } from './actions/index';

function App() {
  const pokemons = useSelector(state => state.data.pokemons, shallowEqual)
  const loading = useSelector(state => state.ui.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
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