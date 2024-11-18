'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-4">Counter: {count}</h1>
      <div className="space-x-4">
        <button onClick={() => dispatch(increment())} className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500">
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-500">
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-500"
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
}