import * as S from './styles';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineAlignRight } from "react-icons/ai";
import logo from '../../../assets/images/favicon.png';

interface MobileMenuProps {
  openMobileMenu(): void;
}
const MobileMenu:React.FC<MobileMenuProps> = ({ openMobileMenu }) => {
  return (
    <>
      <S.Container>
        <S.Nav>
          <div className='logoMenu'>
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
          </div>
          <ul >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/shop">Loja</a>
              </li>
              <li>
                <a href="/">Pages</a>
              </li>
              <li>
                <div className='containerLogin'>
                  <button
                    type="button"
                    aria-label='Login'
                    className='btnLogin'
                  >
                    <a href="/">Login</a>
                  </button>
                </div>
              </li>
          </ul>
          <div className='containerClose'>
            <button
              type="button"
              aria-label='Close'
              onClick={openMobileMenu}
              className='btnClose'
            >
              <AiOutlineClose className="icon"/>
            </button>
          </div>
        </S.Nav>
      </S.Container>

    </>
  )
}

export default MobileMenu;
