import axios from "axios"
import { useState } from "react"

function App() {

    const [deg, setdeg] = useState('00')
    const [city, setcity] = useState('YourCity')
    const [desc, setdesc] = useState('XYZ')
    const [enteredvalue, setenteredvalue] = useState('')

    function handleInput(event) {
        setenteredvalue(event.target.value)
    }

    function getData() {
        var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=92dac862d10cb0bfa56af97073e80aac`)
        weather.then(function (dalta) {
            setdeg(dalta.data.main.temp)
            setdesc(dalta.data.weather[0].description)
            setcity(dalta.data.name)
        })

    }


    return (
        <div className="flex flex-row justify-center h-[100vh] items-center">
            <div style={{ backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)" }} className="p-2 rounded-md shadow">
                <h2 className="font-medium mb-0.5">🌈Hey You!</h2>
                <p className='text-xs font-normal'>Check your favourite City's Weather down :)</p>
                <input type="text" onChange={handleInput} className="rounded-md h-6 text-xs mt-2 p-1 outline-none font-medium" placeholder="City Name?"></input> <br></br>
                <button onClick={getData} className="bg-black text-white rounded-md p-1 text-xs mt-2">Get Report ⛅</button>
                <p className="text-xs mt-2 font-semibold">Degree: {deg} | City: {city} | Weather: {desc}</p>

            </div>
        </div>
    )
}
export default App


