import { useNavigate } from 'react-router-dom'
import image1 from '../../assets/img/burpsuite/image 1.png'
import image2 from '../../assets/img/burpsuite/image 2.png'
import image3 from '../../assets/img/burpsuite/image 3.png'
import image4 from '../../assets/img/burpsuite/image 4.png'
import image5 from '../../assets/img/burpsuite/image 5.png'
import '../../assets/css/Project.css'
import '../../assets/css/Blog.css'

function BurpsuiteBlog() {
    const navigate = useNavigate()

    const handleBackToBlogs = () => {
        navigate('/')
        setTimeout(() => {
            const blogsSection = document.getElementById('blog')
            if (blogsSection) {
                blogsSection.scrollIntoView({ behavior: 'smooth' })
            }
        }, 100)
    }

    return (
        <section id="project1-detail" className="blog-post-page">
            <button className="back-button" onClick={handleBackToBlogs}>
                Back
            </button>

            <div className="project-detail-container">
                <div className="project-detail-header">
                    <h2>Burp Suite Mastery: Pentesting, Crawling, & Authentication</h2>
                    <p className="blog-post-meta">Published by Jayashini Jayaweera | Cybersecurity</p>
                </div>

                <div className="project-detail-content">
                    {/* Section 1: Intruder */}
                    <div className="detail-section">
                        <h2>Who is an Intruder in Cyber Security?</h2>
                        <p>
                            An intruder is an unauthorized user or malicious entity attempting to gain access to a computer network or system.
                            In cybersecurity, automated intruders are designed to scan for software vulnerabilities to help organizations stop breaches
                            before they infect and exploit an attack surface.
                        </p>
                    </div>

                    {/* Section 2: Brute Force */}
                    <div className="detail-section">
                        <h2>Bruteforce Attack Using Burp Suite</h2>
                        <p>
                            A brute force attack is a trial-and-error method used by hackers to guess login credentials, encryption keys, or hidden URLs.
                            Instead of exploiting a software flaw, the attacker uses automated software to guess thousands or millions of combinations
                            until they identify the correct one.
                        </p>

                        <div className="blog-post-image-card">
                            <img
                                src={image1}
                                alt="Bruteforce attack use to guess credentials"
                                className="blog-body-image"
                            />
                            <p className="image-caption">Image 1: Bruteforce attack used to guess the password of a user</p>
                        </div>
                    </div>

                    {/* Section 3: Why does Brute force fail */}
                    <div className="detail-section">
                        <h2>Why does Bruteforce Attack Fail?</h2>
                        <p>
                            To secure authentication mechanisms and protect against these trial-and-error attacks, organizations follow these security mechanisms:
                        </p>
                        <ul className="blog-list">
                            <li><strong>Multi-Factor Authentication (MFA):</strong> Requires attackers to have more than just a password to gain access.</li>
                            <li><strong>Account Lockout & Throttling:</strong> Temporarily locks the account or progressively slows down login attempts after a set number of failed tries.</li>
                            <li><strong>CAPTCHA:</strong> Requires proof of human presence, neutralizing automated bot attempts.</li>
                            <li><strong>Strong Password Requirements:</strong> Forces users to create long, complex, and unique passwords to drastically increase the time needed to crack them.</li>
                        </ul>
                    </div>

                    {/* Section 4: Vulnerabilities */}
                    <div className="detail-section">
                        <h2>What Vulnerabilities Face Bruteforce Attacks?</h2>
                        <div className="blog-sub-grid">
                            <div className="sub-card">
                                <h3>1. Lack of Rate Limiting & Lockouts</h3>
                                <p>Systems are vulnerable when they allow an unlimited number of login attempts within a short timeframe, letting automated bots test thousands of password combinations per minute.</p>
                            </div>
                            <div className="sub-card">
                                <h3>2. Weak Password Policies</h3>
                                <p>Using short, predictable, or sequential passwords (like "12345") drastically reduces the search space for automated scripts.</p>
                            </div>
                            <div className="sub-card">
                                <h3>3. Password Reuse</h3>
                                <p>When users reuse passwords across sites, attackers compile leaked databases to perform credential stuffing attacks on other platforms.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 5: Payload Attacks */}
                    <div className="detail-section">
                        <h2>Other Attacks that use Payloads</h2>
                        <p>Burp Suite Intruder supports four distinct payload delivery positions:</p>

                        <div className="payload-attacks-container">
                            <div className="payload-item">
                                <h3>1. Sniper Attack</h3>
                                <p>Tests one position at a time. It takes a single list of payloads and injects them into the first position while leaving all other positions at baseline values. It then moves to the next position.</p>
                                <span className="use-case-badge">Use: Fuzzing individual parameters for XSS or SQL Injection.</span>
                            </div>
                            <div className="payload-item">
                                <h3>2. Battering Ram</h3>
                                <p>Uses a single list of payloads, but injects the current payload into all positions simultaneously.</p>
                                <span className="use-case-badge">Use: Testing if a system breaks when username and password fields are set to the identical long string.</span>
                            </div>
                            <div className="payload-item">
                                <h3>3. Pitchfork</h3>
                                <p>Uses multiple payload lists and iterates through them simultaneously (e.g. List A's item 1 and List B's item 1 together). It stops when the shortest list runs out.</p>
                                <span className="use-case-badge">Use: Testing linked credentials (known valid pairs of username/password).</span>
                            </div>
                            <div className="payload-item">
                                <h3>4. Cluster Bomb</h3>
                                <p>Uses multiple payload lists and tests every possible combination of those payloads (Cartesian product).</p>
                                <span className="use-case-badge">Use: True brute-forcing username and password lists when pairs are unknown.</span>
                            </div>
                        </div>
                    </div>

                    {/* Section 6: Web Crawling */}
                    <div className="detail-section">
                        <h2>What is Website Crawling?</h2>
                        <p>
                            Website crawling (also called web spidering) is an automated process that uses software bots to systematically browse the Internet to read, index, and map the content of websites.
                        </p>

                        <h3>Why is it Useful?</h3>
                        <ul className="blog-list">
                            <li><strong>Attack Surface Discovery:</strong> Maps out the application's entire perimeter by finding hidden links, unlinked pages, API endpoints, and administrative panels.</li>
                            <li><strong>Speed and Efficiency:</strong> Automates deep site hierarchy navigation within minutes, cataloging every unique request encountered.</li>
                        </ul>

                        <div className="blog-post-image-card">
                            <img
                                src={image2}
                                alt="Website crawling visualization"
                                className="blog-body-image"
                            />
                            <p className="image-caption">Image 2: OWASP Juice Shop website crawling map</p>
                        </div>
                    </div>

                    {/* Section 7: Unsecured Websites */}
                    <div className="detail-section">
                        <h2>What happens when the website is not secured?</h2>
                        <div className="blog-sub-grid">
                            <div className="sub-card">
                                <h3>1. Finding Unlinked Public Pages</h3>
                                <p>These are public pages hidden simply because there are no links leading to them (e.g., <code>/blackfriday-sale-2025</code>, training PDFs). Attackers can access them immediately without authentication.</p>
                            </div>
                            <div className="sub-card">
                                <h3>2. Finding Admin/Authorized Pages</h3>
                                <p>Private portals (e.g., <code>/admin</code>, <code>/dashboard</code>, database panels). Although protected by logins, crawling reveals their existence and exposes potential authorization flaws.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 8: Types of Crawls */}
                    <div className="detail-section">
                        <h2>Types of Crawls in Burp Suite</h2>
                        <p>Burp Suite offers customizable crawls targeting different application structures and dynamic contents.</p>

                        <div className="blog-post-image-card">
                            <img
                                src={image3}
                                alt="Burp Suite crawling options"
                                className="blog-body-image"
                            />
                            <p className="image-caption">Image 3: Configuring Crawl Scenarios in Burp Suite</p>
                        </div>

                        <h3>What do Crawling Messages Mean?</h3>
                        <div className="blog-post-image-card">
                            <img
                                src={image4}
                                alt="Crawling Message Meaning"
                                className="blog-body-image"
                            />
                            <p className="image-caption">Image 4: Web Crawling Notification Messages</p>
                        </div>
                        <ul className="blog-list">
                            <li><strong>Missing Username/Password (Authentication Issue):</strong> The request lacks valid credentials, prompting the website to reject authorization.</li>
                            <li><strong>Malformed Request:</strong> The proxy server rejects or sanitizes the request because it violates safety guidelines or parsing rules.</li>
                        </ul>
                    </div>

                    {/* Section 9: JWT Tokens */}
                    <div className="detail-section">
                        <h2>What is a JWT Token?</h2>
                        <div className="blog-post-image-card">
                            <img
                                src={image5}
                                alt="JWT Token Explanation"
                                className="blog-body-image"
                            />
                            <p className="image-caption">Image 5: JSON Web Token Structure</p>
                        </div>
                        <p>
                            A JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
                        </p>

                        <h3>Why Do We Need to Use JWT Tokens?</h3>
                        <ul className="blog-list">
                            <li><strong>No Database Lookups (Stateless Validation):</strong> The server signs the token using a secret key. When the token returns, the server validates it mathematically without queried databases.</li>
                            <li><strong>Perfect for Microservices & Cloud Architectures:</strong> Self-contained properties let multiple servers verify tokens independently.</li>
                            <li><strong>Secure Information Exchange:</strong> Digital signing ensures that the sender is verified and the data was not tampered with.</li>
                            <li><strong>Authorization & Roles:</strong> Roles are stored inside the token claims (e.g., <code>{"{username: 'Silva', role: 'admin'}"}</code>), granting access directly.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BurpsuiteBlog
