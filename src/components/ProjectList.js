import React, { useState, useEffect } from "react";
import Project from "./Project";

export default function ProjectList() {

    const [projects, setProjects] = useState([]);
    const url = "https://jordan-cortes-admin.herokuapp.com/api/v1/projects"

    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setProjects(responseJSON)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    const projectElements = projects.map(n => {
        return <Project key={n.id}
            imageUrl={n.imageUrl}
            name={n.name}
            about={n.about}
            url={n.url}
        />
    }
    );

    return (
        <section id="projects" className="projects-section">
            <h2>Proyectos</h2>

            <div className="container">
                {projectElements}
            </div>
        </section>
    )
}