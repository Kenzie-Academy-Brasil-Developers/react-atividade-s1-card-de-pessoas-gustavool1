
import './App.css';
import Developer from './components/Developer/Developer';
import NavBar from './components/Developer/Navbar/Navbar';
function App() {
  const nome = 'Gustavo'
  const idade = 20
  const pais = 'Brasil'
  return (
    <div className="App">
      <NavBar item1='Home' item2='Contact' item3='About'/>
      <header className="App-header">
            <Developer name={nome} age={idade} country={pais} />
            <Developer name='Junior' age='25' country='Alemanha' />
            <Developer name='Gabriele' age='30' country='Brasil' />
      </header>
    </div>
  );
}

export default App;
