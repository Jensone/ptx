import Nav from '../components/Nav'

export default function Contact() {

    const envoyer = (e) => {
        // Ici on code la gestion de l'envoi et du la notification
        console.log('c\'est envoyé')
    }  
    
    return (
        <>
            <Nav /> {/* Ici on importe le composant Nav */}
            <h1>Contact</h1>
            <form action="" className='flex flex-col gap-3' onSubmit={envoyer}>
                <input 
                    type="text" 
                    name='nom' 
                    placeholder='Nom'
                    className='p-2 border rounded'
                    required
                    />
                <textarea 
                    name="content" 
                    id="" 
                    cols="30" 
                    rows="10"
                    placeholder='Votre message'
                    className='p-2 border rounded'
                    required
                >
                </textarea>
                <button className='p-2 text-white bg-blue-500 border rounded hover:bg-blue-700'
                >Envoyer</button>
            </form>
        </>
    )
}