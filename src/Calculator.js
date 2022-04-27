import Header from './components/Header';
import Calc from './components/Calc';

export default function Calculator() {
  return (
    <>
      <Header />
      <div className="display_sec">
        <div className="container">
          <div className="flexin">
            <h2 className="title">Let&apos;s do some math!</h2>
            <Calc />
          </div>
        </div>
      </div>
    </>
  );
}
