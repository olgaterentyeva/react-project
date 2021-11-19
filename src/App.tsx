import React, {useState} from "react";

function computeInitialCount() {
    console.log('Some calculations...')
    return Math.trunc(Math.random() * 20)
}

function App() {
    const [count, setCount] = useState(() => {
        return computeInitialCount()
    });

    const [state, setState] = useState({
        title: 'Счетчик',
        date: Date.now()
    })

    function increment() {
        setCount(prev => prev + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    function updateTitle() {
        setState(prev => {
            return {
                ...prev,
                title: 'Новое название'
            }
        })
    }

    return (
        <div className="App">
            <h1>Счетчик: {count}</h1>
            <button onClick={decrement} className="btn btn-danger">Удалить</button>
            <button onClick={increment} className="btn btn-success">Добавить</button>
            <button onClick={updateTitle} className="btn btn-default">Изменить название</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}

export default App;

