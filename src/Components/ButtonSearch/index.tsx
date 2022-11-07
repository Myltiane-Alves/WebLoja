import * as S from './styles';
import { FiSearch } from "react-icons/fi";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaUserAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
export default function ButtonSearch() {
  return (
    <S.Container>
      <div className="content">
        <div className="containerLogo">
            <img src={logo} alt="logo" />
        </div>

        <div className="contentSearch">
            <FiSearch size={20} className="icon" color="#4b566b" />
            <input type="text" placeholder="Pesquisar" />
            <span>Todas as Categorias</span>
        </div>

        <div className="containerIcon">
            <FaUserAlt size={20}  className="icon"/>
            <div className="cart" >
                <Link to="/cart">
                    <RiShoppingBagFill size={20}  className="icon" />
                    {/* <span>Loja</span> */}
                </Link>
            </div>
        </div>
      </div>
    </S.Container>
  );
}
