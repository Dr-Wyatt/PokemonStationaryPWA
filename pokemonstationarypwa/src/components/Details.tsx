import React from 'react';
import { RouteComponentProps } from 'react-router';
import Counter from './Counter';

interface moves {
    move: string,
    pp1: number,
    pp2: number
};

interface movesList extends Array<moves> { };

interface movesListWithName extends Record<string, movesList> {
    [key: string]: movesList
};


interface Props extends RouteComponentProps<{
    pokemon: string;

}> { }

const Details: React.FC<Props> = ({ match }) => {

    const pokemonParam = match.params.pokemon
    console.log(pokemonParam);

    const setPokemon = (paramPokemon: string) => {

        switch (paramPokemon) {
            case "Giratina": {
                const Pokemon = {
                    "Giratina": [

                        { move: "Ominous Wind", pp1: 5, pp2: 5 },
                        { move: "Ancient Power", pp1: 5, pp2: 5 },
                        { move: "Dragon Claw", pp1: 15, pp2: 15 },
                        { move: "Shadow Force", pp1: 5, pp2: 5 }
                    ]
                };
                return Pokemon
            }
            case "Dialga": {
                const Pokemon = {
                    "Dialga": [

                        { move: "Roar of Time", pp1: 5, pp2: 5 },
                        { move: "Heal Block", pp1: 15, pp2: 15 },
                        { move: "Earth Power", pp1: 10, pp2: 10 },
                        { move: "Slash", pp1: 20, pp2: 20 }
                    ]
                };
                return Pokemon
            }
            case "Palkia": {
                const Pokemon = {
                    "Palkia": [

                        { move: "Spacial Rend", pp1: 5, pp2: 5 },
                        { move: "Heal Block", pp1: 15, pp2: 15 },
                        { move: "Earth Power", pp1: 10, pp2: 10 },
                        { move: "Slash", pp1: 20, pp2: 20 }
                    ]
                };
                return Pokemon
            }
            default: {
                const Default = {
                    "Default": [

                        { move: "Move 1", pp1: 5, pp2: 5 },
                        { move: "Move 2", pp1: 5, pp2: 5 },
                        { move: "Move 3", pp1: 5, pp2: 5 },
                        { move: "Move 4", pp1: 5, pp2: 5 }
                    ]
                };
                return Default;
            }
        }
    }

    const pokemonMoves: movesListWithName = setPokemon(pokemonParam);
    const pokemonMovesArray = pokemonMoves[pokemonParam == Object.keys(pokemonMoves)[0] ? pokemonParam : "Default"];


    return (
        <div>
            <h1>
                {pokemonParam}
            </h1>
            <div>
                {pokemonMovesArray.map(({ move }, i) => (
                    <div>
                        <h3>{move}</h3>
                        <Counter>
                            {({ count, setCount }) => (
                                <div>
                                    <div>
                                        <button onClick={() => setCount(count - 1)}> <h2>-</h2></button>
                                    </div>
                                    <div>
                                        <h3>{count == -1 ? count = pokemonMovesArray[i].pp1 : count} / {pokemonMovesArray[i].pp2}</h3>
                                    </div>
                                    <div>
                                        <button onClick={() => setCount(count + 1)}><h2>+</h2></button>
                                    </div>

                                </div>
                            )}
                        </Counter>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Details;