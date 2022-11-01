import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { useDispatch } from 'react-redux'
import { setFavorite } from '../slices/dataSlice'
import StarButton from './StarButton'

const PokemonCard = ({name, image, types, id, favorite}) => {
  const dispatch = useDispatch()
  const typesString = types.map(elem => elem.type.name).join(', ')

  const handleOnFavorite = () => {
    // console.log('clicked')
    dispatch(setFavorite({ pokemonId: id }))
    console.log(favorite)
  }


  return <Card 
    title={name}
    cover={<img src={image} alt={name}/>}
    extra={<StarButton  isFavorite={favorite} handleOnFavorite={handleOnFavorite} />}
  >
    <Meta description={typesString}/>
  </Card>
}

export default PokemonCard