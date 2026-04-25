import { useEffect, useState } from "react";
import {
    Main,
    // Timeline,
    Expertise,
    Project,
    Contact,
    Navigation,
    Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import Texture from './components/Texture'

import './index.scss';
import Alert from "./components/Alert";

function App() {
    const [mode, setMode] = useState('dark');
    const [alertState, setAlertState] = useState({
        message: "",
    });

    useEffect(() => {
        window.alert = (message, type = "info", duration = 4000) => {
            setAlertState({ message, type, duration });
        }
    }, [])

    useEffect(() => console.log(alertState), [alertState])

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    return (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Texture isDark={mode === 'dark'} key={41344} />
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
            <FadeIn transitionDuration={700}>
                <Main />
                <Expertise />
                {<Alert {...alertState} setAlertState={setAlertState} />}
                {/* <Timeline /> */}
                <Project />
                <Contact />
            </FadeIn>
            <Footer />
        </div>
    );
}

export default App;