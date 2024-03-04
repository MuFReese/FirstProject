import { useEffect } from "react"
import Button from "../../Button/Button"

export default function Notes() {

  useEffect(() => {
    const inputElement = document.getElementById('title')
    const listElement = document.getElementById('list')
    const createBTN = document.getElementById('create')
    const notes = [
      {
        title: 'Сделать большой проект при TS, React, NodeJs',
        completed: false
      },
      {
        title: 'Устроиться на работу',
        completed: false
      }
    ]

    function render() {
      listElement.innerHTML = ''
      if ( notes.length === 0) {
        listElement.innerHTML = '<p>Нет элементов</p>'       
      }
      for( let i = 0; i<notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i) )
      }
    }

    render()

    createBTN.onclick = function() {
      if( inputElement.value.length === 0) {
        return
      }
      const newNote = {
        title: inputElement.value,
        completed: false,
      }

      notes.push(newNote)
      render()
      inputElement.value = ''
    }

    listElement.onclick = function(event) {
      if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type
    
        if ( type === 'toggle') {
          notes[index].completed = !notes[index].completed 
        } else if ( type === 'remove') {
          notes.splice(index, 1)
        }
        render()
      }
    }


    function getNoteTemplate(note, index) {
      return  `
      <li
          class="list-group-item d-flex justify-content-between align-items-center"
          style="max-width: 420px"
          >
          <span class=" ${note.completed ?  'text-decoration-line-through' :  ''}">${note.title}</span>
          <span>
            <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
          </span>
      </li
      `
    }
  })
  return(
    <>
    <div style={{background: 'black', color: 'white',width: '100%', border: '3px solid black',display: 'flex', flexDirection: 'column', alignItems: 'center', border: '5px solid grey'}}>
      <h2 style={{fontSize: '30px'}}>Заметки</h2>
      <input style={{width: '400px'}} type="text" id="title" placeholder="Введите задачу"/>
      <button style={{width: '300px', backgroundColor: 'white', padding: '10px', textAlign: 'center', color: 'black', marginBottom: '30px' }} id='create'>Добавить</button >
      <ul className="list-group list-group-flush" id="list"></ul>
    </div>
    </>
  )
}