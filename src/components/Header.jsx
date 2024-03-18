import "bootstrap/dist/css/bootstrap.min.css";

function Header({ startDate, endDate, setStartDate, setEndDate }) {
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };
  return (
    <div className="ml-6">
      <div className="container mt-4 px-2">
        <div className="row mb-3 ">
          <div className="col-md-6 " style={{ color: "darkslategrey" }}>
            <div>
              <h1 className="text-danger">Twubric</h1>
            </div>
            <label for="dateFilter">Joined Twitter between:</label>

            <label for="startDate" className="date text-danger">
              Start Date:
            </label>
            <input
              type="date"
              id="startDate"
              placeholder="YYYY-MM-DD"
              value={startDate}
              onChange={handleStartDateChange}
            />
            <label for="endDate" className="date text-danger">
              End Date:
            </label>
            <input
              type="date"
              id="endDate"
              placeholder="YYYY-MM-DD"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
