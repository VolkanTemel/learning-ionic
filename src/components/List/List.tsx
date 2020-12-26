import React from 'react';
import { IonItem, IonLabel, IonContent, IonCheckbox, IonInput, IonButton } from '@ionic/react';

import "./List.css";

class List extends React.Component {
  state = {
    todos:[{id:1}],
    isLoaded: false
  }

  componentDidMount () {
    fetch("http://localhost/api/todos?page=1")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            todos: result.data
          });
        }

      )
  }
  
   render () {
    let todos = this.state.isLoaded? this.state.todos.map((todo) =>
    <IonItem key={todo.id}>
      <IonLabel>{todo}</IonLabel>
      <IonCheckbox slot="end" color="primary" />
    </IonItem>):<p>Loading...</p>;

    
      
  
    return (
      <IonContent >
        <div className="header"><h1>To-Do List</h1></div>
        {todos}
        <IonItem className="addTodo">
          <IonLabel> To Do : </IonLabel>
          <IonInput></IonInput>
          <IonButton color="success" type="submit">Add</IonButton>

        </IonItem>

      </IonContent>
    )
  }
};
export default List;