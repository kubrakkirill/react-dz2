import List from './components/List'

const cities = ['Kharkiv','Mykolaiv', 'Lviv', 'Poltava']
const background = "lightblue";

function App() {
  return <List list={cities} color={background}/>
}

export default App;
