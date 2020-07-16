import React, { useState } from "react";

interface moves {
    move: string,
    pp1: number,
    pp2: number
};

interface movesList extends Array<moves> { };

interface movesListWithName extends Record<string, movesList> {
    [key: string]: movesList
};

interface Props {
    children: (data: {
        count: number;
        setCount: React.Dispatch<React.SetStateAction<number>>;
    }) => JSX.Element | null;
}

const Counter: React.FC<Props> = ({ children }) => {

    // const movesList = useSetMoves();
    // const params = useParams();
    // console.log(params);
    // console.log(movesList);
    
    const [count, setCount] = useState(-1);

    return <div>{children({count, setCount})}</div>
}

export default Counter;