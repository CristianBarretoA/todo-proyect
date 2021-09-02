import React from 'react';

function TodosError(props) {
    return (
        <React.Fragment>
            <p>An error has occurred: {props.error}</p>
        </React.Fragment>
    );
}

export default TodosError;