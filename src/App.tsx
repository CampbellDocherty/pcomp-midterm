import { useFetchCsvData } from './useFetchCsvData';

const App = () => {
  const { isError, shouldRefill } = useFetchCsvData();

  if (isError) {
    return (
      <div className="container">
        <p>Something went wrong</p>
        <p>Please refresh and try again!</p>
        <p className="emoji">😅</p>
      </div>
    );
  }

  if (!shouldRefill) {
    return (
      <div className="container">
        <p>Nothing to do!</p>
        <p className="emoji">😴</p>
      </div>
    );
  }

  return (
    <div className="container">
      <p>Refill</p>
      <p className="emoji">🌱</p>
    </div>
  );
};
export default App;
