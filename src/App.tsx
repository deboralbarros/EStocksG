import Header from './Components/Header';
import GlobaStyles from './globalStyle';
import Background from './Assets/image.png';

function App() {
  return (
    <div style={{
      // backgroundImage: `url(${Background})`
    }}>
      <GlobaStyles />
      <Header />
    </div>
  );
}

export default App;
