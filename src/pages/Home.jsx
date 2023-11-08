import { Link } from "react-router-dom";
import ImageGenerator from '../components/GenerateImage'
function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <ImageGenerator/>
    </div>
  );
}

export default Home;