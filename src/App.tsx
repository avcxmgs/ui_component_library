import "./App.css";
import React from "react";

import Button from "./components/Button/Button";
import Label from "./components/Label/Label";
import Text from "./components/Text/Text";
import Table from "./components/Table/Table";
import Img from "./components/Img/Img";
import HeroImage from "./components/Hero_Image/HeroImage";
import RadioButton from "./components/Radio_Button/RadioButton";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  const items = [
    { value: "d1", label: "Dropdown 1" },
    { value: "d2", label: "Dropdown 2" },
    { value: "d3", label: "Dropdown 3" },
  ];

  return (
    <>
      <HeroImage
        src="https://placehold.co/1200x300"
        alt="placeholder image"
        text="HERO IMAGE"
        disabled={false}
      />
      <Button disabled={false}>Button</Button>
      <br />
      <Text disabled={false}>Text Area</Text>
      <br />
      <Label disabled={false}>Label</Label>
      <Table disabled={false}>
        <tr>
          <th>TH1</th>
          <th>TH2</th>
        </tr>
        <tr>
          <td>TD1</td>
          <td>TD2</td>
        </tr>
      </Table>
      <br />
      <Img
        src="https://placehold.co/300"
        alt="placeholder image"
        disabled={false}
      />
      <br />
      <RadioButton label="Radio Button" disabled={false} />
      <br />
      <Dropdown items={items} disabled={false} />
      <br />
    </>
  );
}

export default App;
