import React from 'react'
import Image from 'next/image'

const zivilschutz = () => {
    return (
        <div>
            <Image className="hover:scale-200"
                    src="/zivilschutz.jpg"
                    alt="Bild vom Zivilschutzalarm-Informationen."
                    width={1000}
                    height={1413}
            ></Image>
        </div>
    )
}

export default zivilschutz
