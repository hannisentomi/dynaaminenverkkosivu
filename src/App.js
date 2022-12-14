// Tomi Hänninen Tik22km
import './App.css';
import { useState } from 'react'
function App() {

  // Tarvittavat constantit
  const [kg, setKg] = useState(0)
  const [bottles, setBottles] = useState(1)
  const [time, setTime] = useState(1)
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
      let tulos = gramsLeft / (kg * 0.7)
      if(tulos<0){
        tulos=0}
      setPromillet(tulos)
    }
    else {
      let tulos = gramsLeft / (kg * 0.6)
      if(tulos<0){tulos=0}
      setPromillet(tulos)
    }
  }

  return (
    <div>
      <h3>Calculating alcohol blood level</h3>
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
          <label>Promilles </label>
          <output>{promillet.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
