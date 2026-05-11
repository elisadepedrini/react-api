import { useEffect, useState } from "react";

function App() {
  const api_url = "https://lanciweb.github.io/demo/api/actresses/";
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        setActors(data);
      });
  });

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 g-4">
          {actors.map((actor) => (
            <div className="col" key={actor.id}>
              <div className="card">
                <img src={actor.image} alt="" />

                <div className="card-body p-3 ">
                  <h2 className="">{actor.name}</h2>
                  <div className="birth-nation d-flex gap-5 px-3">
                    <li>{actor.birth_year}</li>
                    <li>{actor.nationality}</li>
                  </div>
                  <hr />
                  <h5 className="title-card">BIOGRAFIA</h5>
                  <p>{actor.biography}</p>
                  <hr />
                  <h5 className="title-card">RICONOSCIMENTI</h5>
                  <div className="d-flex gap-3">
                  {actor.awards.map((award) => (
                    <div className="card p-2"><p>{award}</p></div>
                  ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
