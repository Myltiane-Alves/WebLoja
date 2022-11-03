import * as S from './styles';
import icon1 from '../../assets/images/category/cat-1.png';
import icon2 from '../../assets/images/category/cat-2.png';
import icon3 from '../../assets/images/category/cat-1.png';
import icon4 from '../../assets/images/category/cat-2.png';
import icon5 from '../../assets/images/category/cat-1.png';
import icon6 from '../../assets/images/category/cat-2.png';

export default function SiderBarBrand() {
    return (
        <>
            <S.Container>
                <header>
                    <div className="containerHeader">
                        <h2>Marcas</h2>
                        <hr />
                        <h2>lojas</h2>
                    </div>
                </header>
                <div className="containerBox">
                    <div className='box'>
                        <img src={icon1} alt="modas" />
                        <span>Apple</span>
                    </div>
                    <div className='box'>
                        <img src={icon2} alt="eletronicos" />
                        <span>Samsung</span>
                    </div>
                    <div className='box'>
                        <img src={icon3} alt="carros" />
                        <span>Nokia</span>
                    </div>
                    <div className='box'>
                        <img src={icon4} alt="casa" />
                        <span>Vivo</span>
                    </div>
                    <div className='box'>
                        <img src={icon5} alt="Presentes" />
                        <span>Redmi</span>
                    </div>
                    <div className='box'>
                        <img src={icon6} alt="Músicas" />
                        <span>Sony</span>
                    </div>
                    <div className="boxButton">
                        <button
                            type="button"
                            className="btnSeeMore"
                        >
                            Ver mais
                        </button>
                    </div>
                </div>

            </S.Container>
        </>
    )
}
