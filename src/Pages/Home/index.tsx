import  Header  from '../../Components/Header';
import MainCategories from '../../Components/SectionMainCategory';
import OffersInstant from '../../Components/SectionOffers';
import SiderBarCategory from '../../Components/SiderBarCategory';
import HeaderSlide from '../../Components/Sliders/HeadSlider';
export function Home() {
    return (
        <>
            <Header />
            <HeaderSlide />
            <OffersInstant />
            <MainCategories />
        </>
    )
}
