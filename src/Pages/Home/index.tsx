import React, { useState, useEffect } from 'react'
import { Card } from '../../Components/Cards'

import './styles.css';

interface handleNameChangeProps {
  name: string;
}

export function Home() {

  const [studentName, setStudentName] = useState()
  const [students, setStudent] = useState([])
  const [user, setUser] = useState({name: '', avatar: ''})
  const [removeStudent, setRemoveStudent] = useState([])

  function addStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };
    setStudent(prevState => [...prevState, newStudent])
  }


  useEffect(()=>{
    async function FetchData() {
      const reponse = await fetch('https://api.github.com/users/leosilva132');
      const data = await reponse.json();
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    };
    FetchData();
  },[])

  return (
    <div className="container">

      <header className='header'>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de Perfil"/>
        </div>
      </header>

      <input 
      type="text"
      placeholder='Escreva o nome...'
      onChange={e => setStudentName(e.target.value)}
       />

      <button type="button"
      onClick={addStudent}>
        Adicionar
      </button>



      {
        students.map(student =><Card key={student.time} name={student.name} time={student.time}/>)
      }
      
    </div>

  )
}

