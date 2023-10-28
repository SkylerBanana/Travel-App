import React from "react";
import Data from "./Data";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";

export default function App() {
  const dataelements = Data.map((items) => {
    return <Card key={items.id} {...items} />;
  });

  return (
    <div>
      <Navbar />
      {dataelements}
    </div>
  );
}
