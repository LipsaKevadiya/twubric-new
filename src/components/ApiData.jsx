import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function ApiData() {
  const [data, setData] = useState([]);
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

  function deleteUser(uid) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      setData(data.filter((item) => item.uid !== uid));
    }
  }

  function sortByFriends() {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.twubric.friends - b.twubric.friends;
      } else {
        return b.twubric.friends - a.twubric.friends;
      }
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }

  function sortByInfluence() {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.twubric.influence - b.twubric.influence;
      } else {
        return b.twubric.influence - a.twubric.influence;
      }
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }
  function sortByChirpiness() {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.twubric.chirpiness - b.twubric.chirpiness;
      } else {
        return b.twubric.chirpiness - a.twubric.chirpiness;
      }
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }
  function sortByTotal() {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.twubric.total - b.twubric.total;
      } else {
        return b.twubric.total - a.twubric.total;
      }
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }

  return (
    <div>
      <div className="mt-4 px-5">
        <div className="row mb-3">
          <div className="col-md-6">
            <h3 className="text-secondary" >
              Sort By:
            </h3>
            <div className="btn-group" role="group" aria-label="Sort By">
              <button
                type="button"
                className="btn btn-secondary active"
                data-sort="twubric.total"
                onClick={sortByTotal}
              >
                Twubric Score
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-sort="twubric.friends"
                onClick={sortByFriends}
              >
                Friends
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-sort="twubric.influence"
                onClick={sortByInfluence}
              >
                Influence
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-sort="twubric.chirpiness"
                onClick={sortByChirpiness}
              >
                Chirpiness
              </button>
            </div>
          </div>
        </div>
      </div>
      <Table striped bordered hover>
        <tbody>
          <tr style={{ backgroundColor: "black" }}>
            <th>uid</th>
            <th>username</th>
            <th>image</th>
            <th>fullname</th>
            <th>total</th>
            <th>friends</th>
            <th>influence</th>
            <th>chirpiness</th>
            <th>join_date</th>
            <th>Action</th>
          </tr>
          {data.map((item) => (
            <tr style={{ backgroundColor: "darkGrey" }} key={item.uid}>
              <td>{item.uid}</td>
              <td>{item.username}</td>
              <td>
                <img src={item.image} className="rounded" alt={item.username} />
              </td>
              <td>{item.fullname}</td>
              <td>{item.twubric.total}</td>
              <td>{item.twubric.friends}</td>
              <td>{item.twubric.influence}</td>
              <td>{item.twubric.chirpiness}</td>

              <td>{new Date(item.join_date * 1000).toDateString()}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteUser(item.uid)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ApiData;
