import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import UserNameMenu from "./UserNameMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <>
          <Link to="/order-status" className="font-bold hover:text-orange-700">
            Order Status
          </Link>
          <UserNameMenu />
        </>
      ) : (
        <Button
          variant="ghost"
          className="font-bold hover:text-gray-700 hover:bg-orange-700"
          onClick={async () => await loginWithRedirect()}
        >
          <span className="text-white">
            Log In
          </span>
        </Button>
      )}
    </span>
  );
};

export default MainNav;