import "./App.css"
import React, { useState } from 'react';
import moment from "moment";

function App() {

  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  const [removedToDos, setRemovedToDos] = useState([])
  const [compelete, setCompelete] = useState(false);

  const addToDo = () => {
    var newToDo = {
      id: Date.now(),
      text: toDo,
      time: moment().format("LLLL"),
      status: false
    }
    setToDos([...toDos, newToDo])
    setToDo('')
  }

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date();
  var dayName = days[d.getDay()];

  return (
    <div className="app">
      <div className="container">
        <div className="row text-center">
        <h1 className="col-md-12 mt-5">ToDo List</h1>
          <div className="input-group col-md-12 mt-4 mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text bg-success text-white">Add To Do</span>
            </div>
            <input type="text" value={toDo} onChange={(e) => setToDo(e.target.value)} className="form-control" />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit" onSubmit={e => { e.preventDefault() }} onClick={addToDo}>Add</button>
            </div>
          </div>

          <div className="col-md-12">
            {toDos.map((obj) => {
              console.log(obj);
              return (
                <div className="card bg-warning mt-2">
                  <div className="card-body">
                    {obj.text}
                    <div className="buttons">
                      <button className="btn btn-success" onClick={() => {
                        setToDos(toDos.filter(obj2 => {
                          if (obj2.id === obj.id) {
                            if (obj2.status) {
                              obj2.status = false
                            } else {
                              obj2.status = true
                            }
                          }
                          return obj2
                        }))
                      }} ><i className="fas fa-check"></i></button>

                      <button className="btn btn-danger" onClick={() => {
                        if (window.confirm("Are you sure you want to remove this ?")) {
                          setRemovedToDos([...removedToDos, obj]);
                          setToDos(toDos.filter(obj2 => {
                            if (obj2.id !== obj.id) {
                              return obj2;
                            }
                            return null;
                          }))
                        }
                      }} ><i className="fas fa-trash"></i></button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="col-md-12 text-center mt-4">
            <h2>Active Tasks</h2>
            <table className="table-striped table table-hover table-bordered mt-4">
              <thead>
                <tr>
                  <th scope="col">Time</th>
                  <th scope="col">To Do</th>
                  <th scope="col">Completed</th>
                </tr>
              </thead>
              <tbody>
                {toDos.map((obj) => {
                  return (
                    <tr>
                      <td>{obj.time}</td>
                      <td>{obj.text}</td>
                      <td> {!obj.status ? <i className="fas fa-times text-danger"></i> : <i className="fas fa-check text-success"></i>} </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="col-md-12 text-center mt-4">
            <h2>Removed Tasks</h2>
            <table className="table-striped table table-hover table-bordered  mt-4">
              <thead>
                <tr>
                  <th scope="col">Time</th>
                  <th scope="col">To Do</th>
                  <th scope="col">Completed</th>
                </tr>
              </thead>
              <tbody>
                {removedToDos.map((obj) => {
                  return (
                    <tr>
                      <td>{obj.time}</td>
                      <td>{obj.text}</td>
                      <td> {!obj.status ? <i className="fas fa-times text-danger"></i> : <i className="fas fa-check text-success"></i>} </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
