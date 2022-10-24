import * as S from './styles';
import React, { useState, useCallback } from 'react';
import { AiOutlineClose, AiOutlineAlignRight } from "react-icons/ai";
import logo from '../../assets/images/favicon.png';
import MobileMenu from './MobileMenu';

const NavBar: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const OpenMobileMenu = useCallback(() => {
    setMobileMenu(oldValue => !oldValue);
  }, []);
  return (
    <>
      <S.Container>
        <S.Nav>
          <div className='logoMenu'>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <button
            className="mobileMenu"
            type="button"
            onClick={OpenMobileMenu}
            aria-label="Open Menu"
          >
            <AiOutlineAlignRight size={50} />
          </button>
          {mobileMenu && <MobileMenu openMobileMenu={OpenMobileMenu} />}
          <nav>

            <ul >
              <li><a href="/">Home</a> </li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Loja</a></li>
              <li><a href="/">Pages</a></li>
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
              <li>

              </li>
            </ul>
          </nav>
        </S.Nav>
      </S.Container>

    </>
  )
}

export default NavBar;
