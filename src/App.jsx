import './App.css'
import { Head } from './components/Head'
import { NotiPeople } from './components/NotiPeople'
import personas from './assets/People.json'

function App() {
  return (
    <div className="App">
      
      <Head/>
      <div className='notipeople-container'>
        {
          personas.map((people)=>{
            return <NotiPeople people={people} key={people.id}/>
          })
        }
      </div>

     
    </div>
  )
}

export default App
