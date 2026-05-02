// import heroImg from './assets/hero.png'
import { useState } from "react";
import { Link } from "react-router";

import { Button } from "../components/ui/button";
import { Spinner } from "@/components/ui/spinner";

interface PropStudent {
  name: string;
  age: string;
}
function Student({ name, age }: PropStudent) {
  return (
    <div>
      <p>Name :{name}</p>
      <p> Age :{age}</p>
    </div>
  );
}
function Footer({ children }: { children: React.ReactNode }) {
  return <footer>{children}</footer>;
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <h1>This is React</h1>
        <Student name="Su Su" age="22" />
        <img src="favicon.svg" alt="icons logo" />
        <Button onClick={() => setCount((prev) => prev + 1)}>
          Count - {count}
          <Spinner />
        </Button>
        <Button>
          <Link to="/Login">Login</Link>
        </Button>
      </section>
      <Footer>
        <p className="bg-red-500">This is footer</p>
      </Footer>
    </>
  );
}

export default App;
