import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllToDo =(setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data ---> ', data);
        setToDo(data)
    })
}

const addToDo = (text, setText, setToDo) => {
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios
    .patch(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
        console.log(data)
        setText("")
        setIsUpdating(false);
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}
// giugkhhkk
const deleteToDo = (_id, setToDo) => {
    axios
      .delete(`${baseUrl}/delete`, { data: { _id } })
      .then((data) => {
        console.log(data);
        getAllToDo(setToDo);
      })
      .catch((error) => {
        console.error('Error deleting todo:', error);
      });
  }

export {getAllToDo, addToDo, updateToDo, deleteToDo}