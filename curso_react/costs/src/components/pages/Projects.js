import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from './Project.module.css'

import Message from "../layout/Message"
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'


function Projects() {
    const [projects, setProjects] = useState([])
    const location = useLocation()
    let message = ''

    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch("http://localhost:5000/projects", {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProjects(data)
        })
        .catch((error) => console.log(error))
    }, [])

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to='/NewProject' text='Criar projeto'/>
            </div>
            {message && (<Message msg={message} type='sucess' />)}
            <Container customClass='start'>
                {projects.map(project => (
                    <div>
                        <p>{project.name}</p>
                        <p>{project.budget}</p>
                        <input type='button' value='ver mais'></input>
                    </div>
                ))}
            </Container>
        </div>
    )
}

export default Projects