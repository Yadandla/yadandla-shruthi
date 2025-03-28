import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {


    return (
        <div className='first-div'>
            {/* All about me starts */}
            <h1>About Me</h1>
            <div className='space about'>

                <p>Hi there! I’m Yadandla Shruthi, and I’m excited to introduce myself as a Front-End Developer with a year of hands-on experience. Although I’m early in my career, my passion for web development drives me to continuously learn and grow in my field. I believe in my abilities and am confident that I can achieve great things through dedication and creativity. I’m eager to take on new challenges and make a meaningful impact with my work!</p>


                <p>My journey began during my studies when I was introduced to a web technologies chapter that allowed us to explore and practice coding. Initially, I wasn't very interested, as I had my sights set on pursuing an MBA specializing in international business. However, when I didn’t achieve the necessary marks in the competitive exams, my path shifted. An uncle of mine, who works at Tech Mahindra, saw my potential and took the time to train me in basic technologies over the course of a month and a half, despite his busy schedule. Thanks to his support and guidance, I discovered my passion for web development and secured my first job in the field as a Web Developer!</p>


                <p>In addition to my professional journey, I have a deep passion for travel and love exploring new places around the world. Traveling allows me to experience diverse cultures, meet interesting people, and gain new perspectives that inspire both my personal and professional life.</p>


                <p>I had the opportunity to work on major projects - Pi Datacenters and Pi Cloud websites, both of which were for the same client. After one of our senior team member left the company, I found myself managing a significant portion of the project, which proved to be a challenging yet rewarding experience. Through this project, I gained invaluable insights into real-world problems and learned effective shorthand techniques to streamline my workflow. I also had the opportunity to contribute to various other projects, where I actively supported my senior colleagues. It was an incredible chance for professional growth and has shaped my understanding of the complexities involved in large-scale web projects.</p>


                <p>What excites me about my work is solving complex challenges and finding solutions through collaboration with talented individuals. Working with other developers fuels my creativity as we share ideas and tackle challenges together. I value teamwork and continuous improvement, always seeking ways to grow. The ever-evolving nature of technology motivates me to explore new frameworks and tools, making every project an opportunity to enhance my skills and contribute to the web development community.</p>


                <p>Feel free to explore my <Link to="/portfolio" className='text-text1' target='_blank'>Portfolio</Link> page to see my work! My projects may look simple, but they showcase my skills in mastering new technologies. If you’d like to connect, reach out to me via the <Link to="/contact" className='text-text1' target='_blank'>Contact</Link> page—I’d love to hear from you!</p>

            </div>
            {/* All about me ends */}
        </div>
    )
}

export default About
