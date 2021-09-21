import React, { useState,useEffect } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;
function Home() {
  const [state, setState] = useState({
    value: "Private Protected Route - Home",
  });

  /*  The UseEffect below is used to verify the working of Protected Route. 
	 Do not use it aimlessly as it will cause performance issue and server timout due to infinite execution in loop
*/
	useEffect(() => {
		console.log(state.value)
		axios
			.post('http://localhost:8855/home', {
				withCredentials: true
			})
			.then(function(res) {
				// console.log(res.data);
				setState({ ...state, value: res.data });
			})
			.catch(function(error) {
				console.log(error.response);
			});
	},[state]);
	

  const logout = () => {
    axios
      .get("http://localhost:8855/logout")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
    window.location.reload();
  };
  return (
    <div className="container">
      <div>
        <p>Auth App</p>
      </div>
      <div>
        <button onClick={logout}>Log out</button>

        <div />
        <div> {state.value}</div>
      </div>
    </div>
  );
}

export default Home;
