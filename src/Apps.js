import React, { useState } from "react";
import Table from "./table";

function App () {

    const [state, setState] = useState({
        characters: [
            {
                name: 'John Doe',
                job: 'Actor'
            },
            {
                name: 'Mary Anne',
                job: 'Actrress'
            },
            {
                name: 'John Wicked',
                job: 'Killer'
            },
            {
                name: 'Ataisi Nathan',
                job: 'Developer'
            }
            
        ]
    });

    const removeCharacter = (index) => {
        const {characters} = state;

        setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }

    return (
        <div className="container">
            <Table characterData={state.characters} removeCharacter={ removeCharacter} />
        </div>
    );
}

export default App;