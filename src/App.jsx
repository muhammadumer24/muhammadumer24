import { useState } from "react";
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

function App() {
    const [mode, setMode] = useState('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    return (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Texture isDark={mode === 'dark'} />
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
            <FadeIn transitionDuration={700}>
                <Main />
                <Expertise />
                {/* <Timeline/> */}
                <Project />
                <Contact />
            </FadeIn>
            <Footer />
        </div>
    );
}

export default App;