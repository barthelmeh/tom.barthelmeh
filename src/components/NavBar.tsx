import React from 'react';

const NavBar = () => {

    const [count, setCount] = React.useState(0);

    return (
        <div>
            <p>Count is {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Update the count
            </button>
        </div>
    );
}

export default NavBar;