import { storiesOf } from "@storybook/react";
import React from "react";
import IconButton from "../lib/IconButton.es";

const filterIcon = require("./assets/filter-icon.svg");

const IconButtonContainer = () => (
  // ? States (Just an example)
  // const [title, setTitle] = useState(deadpoolQuotes[0]);

  <div>
    <IconButton text="Filter" imageSource={filterIcon} />
  </div>
);
storiesOf("IconButton", module).add("IconButton", () => (
  <IconButtonContainer />
));
