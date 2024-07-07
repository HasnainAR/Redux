import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCount, decrementCount } from './store/slices/countSlice';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  const increment = () => {
    dispatch(incrementCount(count + 1));
  }

  const decrement = () => {
    dispatch(decrementCount(count - 1));
  }

  return (
    <div className="App">
      <button onClick={increment}>
        Increment
      </button>
      <Counter />
      <button onClick={decrement}>
        Decrement
      </button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
