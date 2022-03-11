import './Display.css';

export default function Display({ head, middle, bottom }) {
  return (
    <div className="right">
      <div className="character">
        <div
          className="bg head"
          id="head"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${head}-head.png)` }}
        ></div>
        <div
          className="bg middle"
          id="middle"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${middle}-middle.png)` }}
        ></div>
        <div
          className="bg bottom"
          id="bottom"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${bottom}-pants.png)` }}
        ></div>
      </div>
    </div>
  );
}