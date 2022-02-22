import './App.css';
import IdCard from "./components/IdCard";
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import LikeButton from './components/LikeButton';

function App() {
  return (
    <div className="App">
    
    
    
    <div>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    </div>
    <div>
      <Random min={1} max={6}/>
    </div>
    <div>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} /> 
    </div>

    <div>
      <LikeButton />
      <LikeButton />
    </div>
    
  

      <div>
        <div>Idcard</div>
        <IdCard
          lastName='Mota'
          firstName='Francisco'
          gender='male'
          height={174}
          birth={new Date("1991-07-16")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Ramos'
          firstName='Maria'
          gender='female'
          height={164}
          birth={new Date("1985-09-1")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        </div>
      </div>
  );
}

export default App;
