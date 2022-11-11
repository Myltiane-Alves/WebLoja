import * as S from './styles'
import { AiOutlinePlus } from "react-icons/ai";

export default function ButtonAdd() {
    return (
        <S.Container>
            <button
                type="button"
                className="btn"
              >
                <AiOutlinePlus size={25} />
              </button>
        </S.Container>
    )
}