// import logo from './logo.svg';
import firstOutput from './assets/output.png'
import setofeyes from './assets/setofeyes.png'
import Navbar from './navbar';
import ImageUploader from './ImageUploader';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h2>Early detection of ocular diseases is crucial in preventing blindness caused by conditions such as diabetes, glaucoma, cataract, age-related macular degeneration (AMD), and many other diseases. With at least 2.2 billion people around the world currently experiencing vision impairments, it is vital to develop cost-effective and efficient methods to detect these diseases early on. One such method is through the use of computer vision and deep learning, which can automatically detect ocular diseases by analyzing high-quality medical eye fundus images. By utilizing this technology, healthcare professionals can accurately and quickly diagnose ocular diseases, allowing for early intervention and treatment. This, in turn, can help reduce the incidence of blindness and improve the quality of life for those affected by ocular diseases.
</h2>
      <img src='https://www.samyakeyecare.com/wp-content/uploads/2021/12/fundus-1024x614.jpg' alt="main-funds"></img>
      <br/>
      <img src={firstOutput} alt="myimage-1`"></img>
      <br/>
      <br/>
      <p>Lorem ipsum dolor</p>
      <img src={setofeyes} alt="myimage-1`"></img>
      <ImageUploader />
      <h3>Project Done by Akash GSS and Kabilan M under the guidance of Dr.Rajaram V</h3>
    </div>
  );
}

export default App;
