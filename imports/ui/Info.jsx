import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import LinksCollection from "../api/links";

function Info() {
  const links = useTracker(() => LinksCollection.find().fetch());

  return (
    <div>
      <h2>Learn Meteor!</h2>
      <ul>
        {links.map((link) => (
          <li key={link._id}>
            <a href={link.url} target="_blank" rel="noreferrer">{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Info;
