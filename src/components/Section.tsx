import { LevelContext } from "../context/LevelContext";

export default function Section({level, children}: {level: number; children: React.ReactNode}) {
    return(
        <section className = "section">
            <LevelContext.Provider value={level}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}