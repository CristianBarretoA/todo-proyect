import React from "react";
import './TodoSearch.css';

function TodoSearch() {

    const [state, setState] = React.useState('Juan');

    const onSearchValueChange = ( event ) => {
        setState(event.target.value);
    };

    return [
        <input
            className="TodoSearch"
            placeholder={'Cebolla'}
            onChange={onSearchValueChange}
        />,
        <p>{state}</p>
    ];
}

export {TodoSearch};
