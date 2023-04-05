import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";
import UserCard from "./UserCard";
import ToggleSwitch from "./ToggleSwitch";
import LoginForm from "./LoginForm";
import Alert from "./Alert";
import LoadingIndicator from "./LoadingIndicator";

function App() {
  return (
    <div>
      <Header title="My App" />
      <main>
        <Counter />
        <UserCard name="John Doe" email="john.doe@example.com" />
        <ToggleSwitch />
        <LoginForm />
        <Alert message="This is an error alert" type="error" />
        <LoadingIndicator />
      </main>
      <Footer text="© 2023 My App" />
    </div>
  );
}

export default App;
