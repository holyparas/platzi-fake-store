import Header from '../components/Header';
import img from "/shopping.jpg";

const Home = () => {
  return (
    <div>
      <main className='homepage'>
        <h1>One stop shop for all your shopping needs!</h1>
        <img src={img} alt="" className="homeImage"/>
      </main>

    </div>
  );
}

export default Home;
