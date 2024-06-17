import Nav from '../components/Nav'

export default function Skills() {

    const skills = [
        "html",
        "css",
        "js",
        "react"
    ]

    return (
        <>
            <Nav /> {/* Ici on importe le composant Nav */}
            <h1>Skills</h1>

            <ul className="">
                {skills.map((skill, index) => (
                    <li key={index} className='p-2 border rounded'>{skill}</li>
                ))}
            </ul>
        </>

    )
}