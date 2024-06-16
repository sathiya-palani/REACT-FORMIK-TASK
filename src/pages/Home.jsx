import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to our Website</h1>
      <p>Please Add Books and  Author details</p>

      <Outlet />
    </div>
  )
}

export default Home;