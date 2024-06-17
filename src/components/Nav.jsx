import logo from '../assets/react.svg';

/**
 * 
 * Voir la documentation React Router Dom pour la gestion des liens
 */
export default function Nav() {
    return (
        <>
            <img src="{ logo }" alt="" />
            <ul className='flex gap-3'>
                <li><a href="/">Home</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </>
    )
}