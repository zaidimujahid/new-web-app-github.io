import React from "react";
import { useHistory } from "react-router-dom";

function Dout() {
  const history = useHistory();

  const Magic = () => {
    history.push("/Countdown");
  };

  return (
    <>
      <div className="my-4">
        <div className="jumbotron text-center">
          <p className="lead">
            Geeks for Geeks is a Computer Science portal. It contains well
            written, well thought and well explained computer science and
            programming..
          </p>

          <p>
            Real-time Live and self paced courses carefully curated for you !
          </p>

          <p className="lead">
            <button className="btn btn-success" onClick={Magic}>
              Login
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Dout;
