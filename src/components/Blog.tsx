import { useNavigate } from 'react-router-dom'
import '../assets/css/Projects.css'
import '../assets/css/Blog.css'

interface BlogPost {
    id: number
    title: string
    description: string
    dateDay: string
    dateMonthYear: string
    author: string
    category: string
    image: string
    path: string
}

function Blog() {
    const navigate = useNavigate()

    const blogs: BlogPost[] = [
        {
            id: 1,
            title: "Burp Suite Mastery",
            description: "A comprehensive guide on using Burp Suite, the leading vulnerability scanner for web applications, to identify security flaws.",
            dateDay: "25",
            dateMonthYear: "Jun. 2026",
            author: "Jayashini Jayaweera",
            category: "BurpSuite",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
            path: "Burpsuite"
        }
    ]

    const handleReadMore = (path: string) => {
        navigate(`/blog/${path}`)
    }

    return (
        <section id="blog">
            <br />
            <h2>BLOGS</h2>
            <p>Take a minute to read my blog</p>
            <div className="blogs-grid">
                {blogs.map((blog) => (
                    <div key={blog.id} className="blog-card">
                        <div className="blog-image-wrapper">
                            <img src={blog.image} alt={blog.title} className="blog-image" />
                            <div className="blog-date-badge">
                                <span className="date-day">{blog.dateDay}</span>
                                <span className="date-month">{blog.dateMonthYear}</span>
                            </div>
                        </div>

                        <div className="blog-meta-bar">
                            <div className="meta-item">
                                <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span>{blog.author}</span>
                            </div>
                            <div className="meta-item">
                                <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                </svg>
                                <span>{blog.category}</span>
                            </div>
                        </div>

                        <div className="blog-content">
                            <h3>{blog.title}</h3>
                            <p className="blog-desc">{blog.description}</p>
                            <button
                                className="read-more-btn"
                                onClick={() => handleReadMore(blog.path)}
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Blog
