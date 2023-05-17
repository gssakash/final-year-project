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
      <p>Early detection of ocular diseases is crucial in preventing blindness caused by conditions such as diabetes, glaucoma, cataract, age-related macular degeneration (AMD), and many other diseases. With at least 2.2 billion people around the world currently experiencing vision impairments, it is vital to develop cost-effective and efficient methods to detect these diseases early on. One such method is through the use of computer vision and deep learning, which can automatically detect ocular diseases by analyzing high-quality medical eye fundus images. By utilizing this technology, healthcare professionals can accurately and quickly diagnose ocular diseases, allowing for early intervention and treatment. This, in turn, can help reduce the incidence of blindness and improve the quality of life for those affected by ocular diseases.
</p>
      <img src='https://www.samyakeyecare.com/wp-content/uploads/2021/12/fundus-1024x614.jpg' alt="main-funds"></img>
      <br/>
      <img src={firstOutput} alt="myimage-1`"></img>
      <br/>
      <br/>
      <p>The age distribution of eye diseases can vary depending on the specific condition. Some eye diseases are more common in older age groups, while others can affect individuals at any age.

For example, age-related macular degeneration (AMD) is a leading cause of vision loss in people over the age of 50. As the name suggests, this condition is strongly associated with aging, and the risk of developing AMD increases significantly after the age of 60. However, there are also cases of AMD occurring in individuals in their 40s or even younger.

Cataracts are another common eye condition that is more prevalent in older age groups. According to the National Eye Institute, by age 80, more than half of all Americans either have a cataract or have had cataract surgery. However, cataracts can also occur in younger individuals due to factors such as genetics or trauma.

On the other hand, conditions like amblyopia (lazy eye) and strabismus (crossed eyes) are more commonly diagnosed in childhood. These conditions can lead to vision problems if left untreated, but early detection and intervention can often improve outcomes.

Overall, the age distribution of eye diseases can vary widely depending on the specific condition. Regular eye exams and early detection can be important for maintaining good vision and preventing vision loss, regardless of age.</p>
      <img src={setofeyes} alt="myimage-1`"></img>
      <ImageUploader />
      <h3>Project Done by Akash GSS and Kabilan M under the guidance of Dr.Rajaram V</h3>
    </div>
  );
}

export default App;
