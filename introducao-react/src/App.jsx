import Header from './Components/Header.jsx' 
import Card from './Components/Card.jsx'
import Banner from './Components/Banner.jsx'
import Footer from './Components/footer.jsx'
import ImgCard from './Components/ImgCard.jsx'
import './Components/Img.css'
import GameCard from './Components/GameCard.jsx'
import CarroCard from './Components/CarroCard.jsx'



function App() { 
  return ( 
    <> 
    <ImgCard caption="Lorem ipsum dolor sit amet," />
    
    <Banner>
      <h1>Bem-Vindo ao meu site</h1>
       <p>Aqui você encontrará conteúdos sobre desenvolvimento web.</p>
    </Banner>
      <Card />
      <Footer title="new Lorem ipsum dolor sit amet, consectetur adipiscing elit."/> 
     
        <GameCard name="Minecraft" genre="Sandbox">
  <p>
    Um jogo onde você pode explorar, construir e sobreviver em um mundo cheio de possibilidades.
  </p>
</GameCard>

    <CarroCard />
    </>
  ) 
} 

export default App
