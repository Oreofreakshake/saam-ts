import { useState } from "react";

import TopBar from "./components/TopBar";
import Saam from "./images/saam.jpg";
import "./App.css";

export default function App() {
    const [showSaam, setShowSaam] = useState(false);

    return (
        <div className="App bg-black">
            <div>
                <TopBar showSaam={showSaam} setShowSaam={setShowSaam} />
            </div>
            {showSaam && (
                <div>
                    <div className="text-9xl font-bold text-center text-white">
                        Saam.ts
                    </div>
                    <div className="flex justify-center rounded-lg py-8">
                        <img src={Saam} alt="Saam" className="rounded-3xl" />
                    </div>
                </div>
            )}
        </div>
    );
}
