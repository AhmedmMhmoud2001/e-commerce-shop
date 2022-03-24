import Announcement from '../Componantes/Announcement';
import Categories from '../Componantes/Categories';
import Products from '../Componantes/Products';
import Slider from '../Componantes/Slider';
import Newsletter from '../Componantes/Newsletter';
import Footer from '../Componantes/Footer';
const Home = () => {
  return (
    <div>
       <Announcement/>
       <Slider/>
       <Categories/>
       <Products/>
       <Newsletter/>
       <Footer/>
    </div>
    
  )
}

export default Home;
