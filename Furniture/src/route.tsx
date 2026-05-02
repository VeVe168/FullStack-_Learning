import { createBrowserRouter } from "react-router";

import HomePage from "./pages/App.tsx";
import LoginPage from "./pages/auth/Login.tsx";
import RegisterPage from "./pages/auth/register.tsx";
import ConfirmPassword from "./pages/auth/password.tsx";
import VerifyOtp from "./pages/auth/verifyOtp.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    // Component: Root,
    children: [{ index: true, Component: HomePage }],
  },
  { path: "Login", Component: LoginPage },
  {
    path: "Register",
    children: [
      { index: true, Component: RegisterPage },
      { path: "password", Component: ConfirmPassword }, //password
      { path: "verifyOtp", Component: VerifyOtp }, //otp
    ],
  },
]);
