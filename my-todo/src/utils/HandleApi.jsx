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

const updateToDo = (toDoId, text, _id, setToDo, setText, setIsUpdating) => {
    axios
    .post(`${baseUrl}/update`, { _id: toDoId, text })
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
      .post(`${baseUrl}/delete`, { data: { _id: setToDo} })
      .then((data) => {
        console.log(data);
        getAllToDo(setToDo);
      })
      .catch((error) => {
        console.error('Error deleting todo:', error);
      });
  }

export {getAllToDo, addToDo, updateToDo, deleteToDo}