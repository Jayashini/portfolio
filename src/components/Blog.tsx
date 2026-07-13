import { useNavigate } from 'react-router-dom'
import '../assets/css/Projects.css'
import '../assets/css/Blog.css'


interface Project {
    id: number
    title: string
    description: string
    link: string
}

function Projects() {
    const navigate = useNavigate()

    const projects: Project[] = [
        {
            id: 1,
            title: "Burpsuite",
            description: "Vunerability scanner for web applications.",
            link: "https://example.com"
        },


    ]

    const handleViewProject = (projectTitle: string) => {
        navigate(`/blog/${projectTitle}`)
    }

    return (
        <section id="blog">

            <br />

            <h2>BLOGS</h2>
            <p>Take a minute to read my blog</p>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">

                        <br />
                        <br />
                        <br />


                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p className="description">{project.description}</p>
                            <br />

                            <button
                                className="view-project"
                                onClick={() => handleViewProject(project.title)}
                            >
                                View Blog →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
