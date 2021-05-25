import React from 'react'
import Image from 'next/image'

const LFA = () => {
    return (
        <div>
            <Image
            src="/feuerloescher.png"
            alt="Bild vom LFA. Jetzt gerade Platzhalter."
            width={360}
            height={720}
            ></Image>
            <div className="m-8 border-8 border-red-600 p-8 display: inline-block float-right ">
                <p>Technische Daten</p>




            </div>
        </div>
    )
}

export default LFA
