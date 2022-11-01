import { Button } from 'antd'
import { StarFilled, StarOutlined } from '@ant-design/icons'


const StarButton = ({ isFavorite, handleOnFavorite }) => {
  const Icon = isFavorite ?  StarFilled  : StarOutlined   
  return <Button icon={<Icon />} onClick={handleOnFavorite}/>
}

export default StarButton