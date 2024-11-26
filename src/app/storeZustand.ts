import { create } from 'zustand';

interface StoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
  incrementByAmount: (incrementAmount: number) => void;
}

const useStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  incrementByAmount: (incrementAmount) => set((state) => ({ count: state.count + incrementAmount })),
}));

export default useStore;
