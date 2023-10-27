import './Home.css';
import blankImage from '../../images/white_placeholder.png'
function Home() {
  return (
    <div className="background-container">
      {/* Background Image */}
      <div className="background-image"></div>

      {/* Image Placeholder */}
      <div className="image-placeholder">
        <img src={blankImage} alt="Image Placeholder" />
      </div>
    </div>
  );
}

export default Home;
