import { LevelContext } from "../context/LevelContext";
import {useContext} from "react";

// export default function Section({level, children}: {level: number; children: React.ReactNode}) {
    export default function Section({children}: {children: React.ReactNode}) {
        const level = useContext(LevelContext);
    return(
        <section className = "section">
            {/* <LevelContext.Provider value={level}> //manually providing the context */}
            <LevelContext.Provider value = {level + 1}> {/* automatically updating the level number from the section aboove it */}
                {children}
            </LevelContext.Provider>
        </section>
    );
}