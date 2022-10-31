import React from "react";
import { useHistory } from "react-router-dom";

function Chain() {
  const history = useHistory();

  const Magic = () => {
    history.push("/HomePage");
  };

  return (
    <>
      <div className="my-4">
        <div className="jumbotron text-center">
          <p className="lead">
            Geeks for Geeks is a Computer Science portal. It contains well
            written, well thought and well explained computer science and
            programming articles
          </p>

          <p>
            Real-time Live and self paced courses carefully curated for you !
          </p>

          <p className="lead">
            <button className="btn btn-success" onClick={Magic}>
              Home
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Chain;
