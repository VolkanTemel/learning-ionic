import React, { Component } from 'react';
import { IonItem, IonLabel, IonContent, IonCheckbox, IonInput, IonButton } from '@ionic/react';
import "./Lists.css";

export default class Lists extends Component {
  state = {
    todos:[{id:0, todo:""}],
    isLoaded: false,
    isActive:false
  }

  checkCheckbox=() => {
    let isActive = this.state.isActive;
    this.setState({isActive:!isActive})
  }
    componentDidMount () {
   this.getTodos();
  }

   getTodos = () =>{
    fetch("http://localhost:3000/todos")
    .then((Response) => Response.json())
    .then((data) => this.setState({ todos: data , isLoaded: true}));
  };

  render () {
    
    let todos = (this.state.isLoaded?(this.state.todos.map((todo)=>(
      <IonItem key={todo.id}><IonLabel>{todo.todo}</IonLabel><IonCheckbox onClick={this.checkCheckbox}/></IonItem>
    ))): <IonItem><IonLabel>"Loading..."</IonLabel></IonItem>);
    
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
