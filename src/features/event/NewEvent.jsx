import { Link } from "react-router-dom";

function NewEvent() {
  return (
    <div>
      <Link to="/">← Back to dashboard</Link>
      <h1>New Event</h1>
    </div>
  );
}

export default NewEvent;
