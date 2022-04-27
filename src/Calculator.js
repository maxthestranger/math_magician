import Header from './components/Header';
import Calc from './components/Calc';

export default function Calculator() {
  return (
    <>
      <Header />
      <div className="flexin">
        <h2>Let&apos;s do some math!</h2>
        <Calc />
      </div>
    </>
  );
}
