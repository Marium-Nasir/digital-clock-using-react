import {useState} from 'react';
const App = () => {
    let time = new Date().toLocaleTimeString();
    let [ctime,updtime] = useState(time);
    // updtime(ctime)
    setInterval(()=>{
        time = new Date().toLocaleTimeString();
        updtime(time);
    },1000)
    return(
        <>
        <h1>{time}</h1>
        </>
    )
}

export default App;