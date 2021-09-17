import React, { useEffect, useState } from "react";
import { accountService } from "../services/accountServices";

import { NavLink } from "react-router-dom";

function Nav() {
  const [account, setAccount] = useState(null);
  useEffect(() => {
    accountService.account.subscribe((x) => setAccount(x));
  }, []);

  if (!account) return null;

  return(
      <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink exact to="/" className="nav-item nav-link">Home Page</NavLink>
                <button className="btn btn-link nav-item nav-link" onClick={accountService.logout}>Logout</button>
            </div>
        </nav>
      </div>
  );
}


export default Nav;
