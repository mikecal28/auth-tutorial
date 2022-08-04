import { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserProvider";

function LoginPage() {
  const { setUser, setAuthIsLoading } = useContext(UserContext);

  return (
    <div className="login-page">
      <h1>Login</h1>

      <form>
        <div>
          <input type="email" required />
        </div>

        <div>
          <input type="password" required />
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
