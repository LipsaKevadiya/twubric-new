import React, { useEffect, useState } from "react";

function ApiData({ startDate, endDate }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json"
    ).then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);

  useEffect(() => {
    // Filter data based on startDate and endDate
    const filtered = data.filter((user) => {
      const joinDate = new Date(user.join_date * 1000);
      return (
        (!startDate || joinDate >= new Date(startDate)) &&
        (!endDate || joinDate <= new Date(endDate))
      );
    });
    setFilteredData(filtered);
  }, [data, startDate, endDate]);

  function deleteUser(uid) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      setData(data.filter((item) => item.uid !== uid));
    }
  }

  function sortBy(key) {
    const sortedData = [...filteredData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.twubric[key] - b.twubric[key];
      } else {
        return b.twubric[key] - a.twubric[key];
      }
    });
    setFilteredData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }

  return (
    <div className="container mt-4">
      <h3 className="text-danger">Sort By:</h3>
      <div className="btn-group mb-3" role="group" aria-label="Sort By">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => sortBy("total")}
        >
          Twubric Score
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => sortBy("friends")}
        >
          Friends
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => sortBy("influence")}
        >
          Influence
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => sortBy("chirpiness")}
        >
          Chirpiness
        </button>
      </div>
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredData.map((user, i) => (
            <div key={i} className="col">
              <div className="card h-100 shadow">
                <div className="row g-0">
                  <div className="col-md-4 d-flex align-items-center justify-content-center p-2">
                    <img
                      src={user.image}
                      className="img-fluid  rounded"
                      alt={`user${i + 1}`}
                      style={{ width: "150px", height: "150px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mt-3">
                        <h5 className="card-title ">{user.fullname}</h5>
                        <p className="card-title">{user.twubric.total}</p>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <p className="card-text">
                          Friends {user.twubric.friends}
                        </p>
                        <p className="card-text">
                          Influence {user.twubric.influence}
                        </p>
                        <p className="card-text">
                          Chirpiness {user.twubric.chirpiness}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <p className="card-text ">
                          Join Date:{" "}
                          <p className="card-text ">
                            {new Date(user.join_date * 1000).toDateString()}
                          </p>
                        </p>
                        <button
                          className="btn  btn-danger btn-sm"
                          onClick={() => deleteUser(user.uid)}
                          style={{ width: "80px", height: "30px" }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ApiData;
