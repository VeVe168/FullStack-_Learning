import { createBrowserRouter } from "react-router";
import Homescreen from "./pages/App";
import Error from "./error";
import RootLayout from "./components/layout/RootLayout";
import LoginScreen from "./pages/auth/Login";
import SignupPage from "./pages/auth/Register";
import AuthRootLayout from "./components/layout/AuthRootLayout";
import VerifyOtpPage from "./pages/auth/VerifyOtp";
import ComfirmPasswordPage from "./pages/auth/Comfirm-password";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: Error,
    // RootLayout's Children
    children: [
      { index: true, Component: Homescreen }, //"/"
    ],
  },
  { path: "/Login", Component: LoginScreen },
  {
    path: "/register",
    Component: AuthRootLayout,
    children: [
      {
        index: true,
        Component: SignupPage,
      },
      { path: "verify-otp", Component: VerifyOtpPage },
      { path: "confirm-password", Component: ComfirmPasswordPage },
    ],
  },
  //"/register" "/register/otp""/register/password"
]);
