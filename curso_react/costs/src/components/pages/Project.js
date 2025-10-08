import { parse, v4 as uuidv4 } from 'uuid'

import styles from './Project.module.css'

import { data, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'
import ServiceForm from '../service/ServiceForm'
import { jsx } from 'react/jsx-runtime'

function Project() {
    const { id } = useParams()
    const [project, setProject] = useState({})
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    function createService(project) {
        setMessage('')
        
        const lastService = project.services[project.services.length - 1]
        lastService.id = uuidv4()
        const newCost = parseFloat(project.costs) + parseFloat(lastService.cost)

        if (newCost > parseFloat(project.budget)) {
            setMessage('Orçamento ultrapassado, verifique o valor do serviço!')
            setType('error')
            project.services.pop()
            return false
        }

        project.costs = newCost

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {

        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    setProject(data)
                })
                .catch(error => console.log(error))

        }, 300)

    }, [id])

    function editPost(project) {
        setMessage('')

        if (project.budget < project.cost) {
            setMessage('O orçamento não pode ser menor que o custo do projeto')
            setType('error')
            return false
        }


        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then(resp => resp.json())
            .then(data => {
                setProject(data)
                setShowProjectForm(false)
                setMessage('Projeto atualizado com sucesso')
                setType('sucess')
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            {project.name ?
                (
                    <div className={styles.project_details}>
                        <Container customClass='column'>
                            {message && (<Message type={type} msg={message} />)}
                            <div className={styles.details_container}>
                                <h1>Projeto: {project.name}</h1>
                                <button className={styles.btn} onClick={toggleProjectForm}>{showProjectForm ? ('Fechar') : ('Editar projeto')}</button>

                                {showProjectForm ? (
                                    <div className={styles.project_info}>
                                        <ProjectForm handleSubmit={editPost} btnText='Concluir edição' projectData={project} />
                                    </div>
                                ) : (
                                    <div className={styles.project_info}>
                                        <p><span>Categoria: </span> {project.category.name}</p>
                                        <p><span>Total de orçamento: </span> {project.budget}</p>
                                        <p><span>Total utilizado: </span> {project.costs}</p>
                                    </div>
                                )}
                            </div>

                            <div className={styles.service_form_container}>
                                <h1>Adicione um serviço</h1>
                                <button className={styles.btn} onClick={toggleServiceForm}>{showServiceForm ? ('Fechar') : ('Adicionar serviço')}</button>
                                <div className={styles.project_info}>
                                    {showServiceForm && (
                                        <ServiceForm
                                            handleSubmit={createService}
                                            btnText='Adicionar Serviço'
                                            projectData={project}
                                        />
                                    )}
                                </div>
                            </div>

                            <Container customClass='start'>
                                <p>Serviços</p>
                            </Container>

                        </Container>
                    </div>
                ) :
                (
                    <Loading />
                )}
        </>
    )
}

export default Project