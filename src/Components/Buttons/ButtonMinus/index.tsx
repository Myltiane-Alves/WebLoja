import * as S from './styles'
import { AiOutlineMinus } from "react-icons/ai";

export default function ButtonMinus() {
    return (
        <S.Container>
            <button
                type="button"
                className="btn"
              >
                <AiOutlineMinus size={25}/>
              </button>
        </S.Container>
    )
}
