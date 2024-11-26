import useStore from '../storeZustand';

export function printLogCount() {
  const state = useStore.getState();
  console.log('Current count:', state.count);
}
