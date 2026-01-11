// Library import
import { useState } from "react";
import { Link } from "react-router";
// local import
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
type HeaderProps = {
  title: string;
  body: string;
};
// interface HeaderProps {
//   title: string;
// }
// interface HeaderPropsInterface extends HeaderProps {
//   body: string;
// }
function Footer({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
function Header(props: HeaderProps) {
  return (
    <>
      <h1 className="text-red-800">This is {props.title}</h1>
      <div>This is {props.body}</div>
    </>
  );
}
// const TabButton = (props: { label: string; onPress: () => void }) => (
//   <button onClick={props.onPress}>{props.label}</button>
// );
function App() {
  const [counter, setCounter] = useState(0);
  const date = new Date().toLocaleDateString();
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <>
      <Link to="/Login">Go To Login</Link>
      <Header title="Furniture Store" body="Welcome to our furniture store" />
      <h2>Today is {date}</h2>
      <button onClick={increment}>Count -{counter}</button>
      <Button size="sm" variant="outline" disabled>
        <Spinner className="text-orange-400" />
        Submit
      </Button>
      <Footer>
        <p>This is Footer</p>
      </Footer>
    </>
  );
}

export default App;
