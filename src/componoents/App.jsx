import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojies) {
  return (
    <Entry
      key={emojies.id}
      emoji={emojies.emoji}
      name={emojies.name}
      description={emojies.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Majd Q</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
