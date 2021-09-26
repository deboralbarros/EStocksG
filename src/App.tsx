import Header from './Components/Header';
import GlobaStyles, { TitleContainer } from './globalStyle';
import Text from './Components/Text';

function App() {
  return (
    <>
      <GlobaStyles />
      <Header />
      <TitleContainer>
        <Text fontSize={62} fontWeight={600}>Frase de apresentação da solução principal</Text>
        <Text fontSize={16} fontWeight={600}> "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</Text>
      </TitleContainer>
    </>
  );
}

export default App;

