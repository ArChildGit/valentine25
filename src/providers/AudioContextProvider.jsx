import { createContext, useContext, useState } from "react";

const AudioContext = createContext(null); // Explicitly set default value to `null`

export const AudioProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audio = new Audio("src/assets/song/background_music.mp3");

    const playAudio = () => {
        audio.play();
        setIsPlaying(true);
    };

    const pauseAudio = () => {
        audio.pause();
        setIsPlaying(false);
    };

    return (
        <AudioContext.Provider value={{ playAudio, pauseAudio, isPlaying }}>
            {children}
        </AudioContext.Provider>
    );
};

// Custom hook to use the audio context
export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error("useAudio must be used within an AudioProvider");
    }
    return context;
};
