import React from "react";

// add in material UI and firebase ----

import { ListItem, ListItemText, Button } from "@material-ui/core";
import { db } from "./firebase_config";

export default function TodoListItem({ todo, inprogress, id }) {
  function toggleInProgress() {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }

  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        
        
        <ListItemText
        color="primary"
        primary={todo}
          secondary={inprogress ? "Click 'I have completed', or ' X ' when complete" : "DONE!"
        
        }
        />
      </ListItem>

      <Button onClick={toggleInProgress}>
        
        {inprogress ? "I have completed!" : "UnDo"}
        
      </Button>
      <Button onClick={deleteTodo}>X</Button>
    </div>
  );

}
