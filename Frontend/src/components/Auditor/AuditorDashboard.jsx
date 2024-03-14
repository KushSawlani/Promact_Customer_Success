import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import DisplayProject from "../DisplayProject";


const AuditorDashboard = () => {
  const { getAccessTokenSilently, isLoading, isAuthenticated } = useAuth0();
  const [token,setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      if (isAuthenticated) {
        const temp = await getAccessTokenSilently();
        setToken(temp);
      }
    };

    fetchToken();
  }, [getAccessTokenSilently, isAuthenticated]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading
      </div>
    );
  }

  if (!isAuthenticated) {
    // toast.error('You must be logged in to view this page.');
    return (
      <div className="flex bold text-4xl h-screen">
        <p>You must be logged In to view this page.</p>
      </div>
    );
  }

  return (
    <div className="items-center space-y-16">
      <DisplayProject  />
    </div>
  );
};

export default AuditorDashboard;
