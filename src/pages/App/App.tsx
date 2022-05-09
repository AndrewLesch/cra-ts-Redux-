import React, { useState } from 'react';
import { connect } from 'react-redux';
import TodoList from '../../components/Todo/TodoList';
import TodoForm from '../../components/TodoForm/TodoForm';
import { setIsFiltered } from '../../redux/Actions';

import './App.css';

const App: React.FC<any> = ({ setIsFilteredAction }) => {
  return (
    <div className="container">
      <TodoForm />
      <div className="functional-panel-container">
        <h1>Todos</h1>
        <div className="filter-buttons--container">
          <button onClick={() => setIsFilteredAction(true)}>Today</button>
          <button onClick={() => setIsFilteredAction(false)}>All</button>
        </div>

        <div className="sort-select--container">
          <span>Sort by </span>
          <select>
            <option value="Title">Title</option>
            <option value="Date">Date</option>
          </select>
        </div>
      </div>
      <TodoList />
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  setIsFilteredAction: (isFiltered: boolean) => {
    const actionPayload = setIsFiltered(isFiltered);
    dispatch(actionPayload);
  },
});
export default connect(null, mapDispatchToProps)(App);
