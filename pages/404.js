import Link from 'next/link'

const NotFound = () => {

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <h2 className="text-4xl mb-3">404 | Seite wurde nicht gefunden</h2>
            <Link href="/"><button className="px-4 py-2 font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300 text-white">Zurück zur Homepage</button></Link>
        </div>
    )
}

export default NotFound
