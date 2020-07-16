import React from 'react';
import { Link } from 'react-router-dom';

const pokemonList= [
    { val: 'Giratina' },
    { val: 'Dialga' },
    { val: 'Palkia' }
];

const Lists: React.FC = () => {

    return (
        <div>
            {pokemonList.map(({ val }, i) => (
                <div key={i}>
                    <div>
                        <Link to={`${process.env.PUBLIC_URL}/${val}`}>
                        <h2>{val}</h2>
                        </Link>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default Lists;