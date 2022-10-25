import { AiOutlineHeart, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai'
import * as S from './styles'
import celular from '../../assets/images/flash/flash-3.png'

export default function MainCategories() {
  return (
    <S.Container>
      <div className="containerHeading">


          <div className="headingLeft">
            <h2>Categorias Principais</h2>
          </div>
          <div className="headingRoght">
            <span>Ver tudo</span>
          </div>
      </div>
    </S.Container>
  )
}
