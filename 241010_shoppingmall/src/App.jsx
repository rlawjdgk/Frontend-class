import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Layout from "./components/Layout";
import ProductAll from "./Pages/ProductAll";
import Login from "./Pages/Login";
import { useSelector } from "react-redux";
import PrivateRoute from "./routes/PrivateRoute";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }
   a {
    text-decoration: none;
    color: inherit;
   }

`;

const App = () => {
  const [authenticate, setauthenticate] = useState(false);
  const trueOk = useSelector(() => state.auth.authenticate);

  useEffect(
    () => {
      setAuthenticate(trueOk);
    },
    { trueOk }
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout authenticate={authenticate} setauthenticate={setauthenticate} />
      ),
      children: [
        {
          index: true,
          element: <ProductAll />,
        },
        {
          path: "login",
          element: (
            <Login
              authenticate={authenticate}
              setauthenticate={setauthenticate}
            />
          ),
        },
        {
          path: "products/:id",
          element: <PrivateRoute authenticate={authenticate} />,
        },
      ],
    },
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
