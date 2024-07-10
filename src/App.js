import { useState } from "react";
import { Board } from "./components/Board";
import Grouper from "./components/Grouper";


function App() {

    const options_ = ["status", "userId", "priority"];
    const [option, setOption] = useState("status");
    const [desc, setDesc] = useState(false)


    return (
        <div className="App">
            < Grouper options_={options_} setOption={setOption} setDesc={setDesc}/>
            < Board option={option} desc={desc}/>
        </div>
    );
}

export default App;
