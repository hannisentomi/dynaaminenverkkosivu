
import './App.css';
import { useState } from 'react'
function App() {

  const [kg, setKg] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState('male')
  const [promillet, setPromillet] = useState(0)

  // Promillien laskenta tapahtuu tässä funktiossa 
  const laske = (e) => {
    e.preventDefault()
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = kg / 10
    let gramsLeft = grams - (burning * time)

    if (gender === 'male') {
      const tulos = gramsLeft / (kg * 0.7)
      setPromillet(Math.abs(tulos))
    }
    else {
      const tulos = gramsLeft / (kg * 0.6)
      setPromillet(Math.abs(tulos))
    }
  }

  return (
    <div>
      <h3>Alkometri</h3>
      <form onSubmit={laske}>
        <div>
          <label>Weight</label>
          <input type="number" value={kg} onChange={e => setKg(e.target.value)}></input>
        </div>
        <div>
          <label>Bottles</label>
          <select value={bottles} onChange={e => setBottles(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <label>Time</label>
          <select value={time} onChange={e => setTime(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="contact" value="male" defaultChecked onChange={e => setGender(e.target.value)} />
          <label>Male</label>

          <input type="radio" name="contact" value="woman" onChange={e => setGender(e.target.value)} />
          <label>Female</label>
        </div>
        <div>
          <label>Promillea </label>
          <output>{promillet.toFixed(1)}</output>
        </div>
        <button>Laske</button>
      </form>
    </div>
  );
}

export default App;
