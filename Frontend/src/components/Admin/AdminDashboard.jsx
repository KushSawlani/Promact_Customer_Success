import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import DisplayProject from "../../pages/DisplayProject";
import { Button } from "monday-ui-react-core";

const AdminDashboard = () => {
  const { getAccessTokenSilently, isLoading, isAuthenticated } = useAuth0();
  const [Token, setToken] = useState(null);
 
  const fetchToken = async () => {
    if (isAuthenticated) {
      const temp = await getAccessTokenSilently();
      setToken(temp);
    }
  };
  useEffect(() => {

    fetchToken();
  }, [getAccessTokenSilently, isAuthenticated]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>You must be logged in to view this page.</div>;
  }

  return (
    <div className="w-full">
      <div className="flex flex-row" style={{ flexDirection: "row" }}>
        <Link to="/adduserform">
          <Button>Add User Form</Button>
        </Link>
  
      </div>


      <DisplayProject />
    </div>
  );
};

export default AdminDashboard;
