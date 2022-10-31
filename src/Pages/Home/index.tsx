import FeaturedServices from '../../Components/FeaturedServices';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import NewsLetter from '../../Components/NewsLestter';
import Accessory from '../../Components/SectionAccessory';
import Announcements from '../../Components/SectionAnnoucument';
import BigPromation from '../../Components/SectionBigPromation';
import MainCategories from '../../Components/SectionMainCategory';
import NewProducts from '../../Components/SectionNewProducts';
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
      <NewProducts />
      <BigPromation />
      <Accessory />
      <Announcements />
      <FeaturedServices />
      <NewsLetter />
      <Footer />
    </>
  )
}
