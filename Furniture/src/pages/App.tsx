import { Button } from "@/components/ui/button";
import { signUp, signIn } from "@/lib/auth-client";
function App() {
  const handleSignUp = async () => {
    const name = "John Doe";
    const email = "johndoe@gmail.com";
    const password = "Password123";

    const { data, error } = await signUp.email({ name, email, password });
    console.log("data", data);
    console.log("error", error);
  };
  const handleSignIn = async () => {
    const email = "johndoe@gmail.com";
    const password = "Password123";

    const { data, error } = await signIn.email({ email, password });
    console.log("data", data);
    console.log("error", error);
  };

  return (
    <>
      <h1>Welcome to fullstack development!</h1>
      <Button onClick={handleSignUp}> Sign Up </Button>
      <Button onClick={handleSignIn}> Sing In</Button>
    </>
  );
}

export default App;
