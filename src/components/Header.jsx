import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div>
      <div className="mt-4 px-5">
        <div className="row mb-3">
          <div className="col-md-6" style={{ color: "darkslategrey" }}>
            <div>
              <h1 style={{ color: "red" }}>Twubric</h1>
            </div>
            <label for="dateFilter">Joined Twitter between:</label>
          
            <label for="startDate" className="date" style={{ color: "red" }}>
              Start Date:
            </label>
            <input type="date" id="startDate" placeholder="YYYY-MM-DD" />
            <label for="endDate" className="date" style={{ color: "red" }}>
              End Date:
            </label>
            <input type="date" id="endDate" placeholder="YYYY-MM-DD" />
          </div>
        </div>

     
      </div>
    </div>
  );
}

export default Header;
