import React from 'react'
import Image from 'next/image'

const Notfall = () => {
    return (
        <div >
            <div className="grid gap-1 grid-cols-3">
                <div className=" text-xs sm:text-base m-2 sm:m-8 sm:border-8 sm:p-8   border-2 border-red-600 p-2 display: inline-block">
                    <h1 className="font-semibold text-lg sm:text-3xl">Notruf - Die W Fragen</h1>

                    <p className="">WO geschah es?</p>
                    <p>WAS geschah?</p>
                    <p>WIE viele Verletzte? </p>
                    <p>WELCHE Art von Verletzungen?</p>
                    <p>WARTEN auf Rückfragen?</p>


                </div>
                <div className="text-xs sm:text-base m-2 border-2 border-red-600 p-2 display: inline-block sm:m-8 sm:border-8 sm:p-8">
                    <h1 className="font-semibold text-lg sm:text-3xl">Notruf - Nummern</h1>

                    <p>122 - Feuerwehr</p>
                    <p>133 - Polizei </p>
                    <p>144 - Rettung </p>
                    <p>112 - Internationaler Notruf</p>
                    <p>140 - Bergrettung</p>
                    <p>128 - Gas-Notruf</p>

                </div>

                <div className="text-xs sm:text-base m-2 border-2 border-red-600 p-2 display: inline-block sm:m-8 sm:border-8 sm:p-8">
                    <h1 className="font-semibold text-lg sm:text-3xl">Wichtig</h1>

                    <p>Selbstschutz vor Retten von anderen</p>
                    <p>Man soll Anderen nur helfen wenn dies gefahrlos möglich ist</p>
                    <p>Sonst auf das Eintreffen der Spezialkräfte warten </p>
                    <p>Dies ist besonders wichtig in diesen Situationen: </p>

                </div>

            </div>

            <Image className="hover:scale-200"
                    src="/zivilschutz.jpg"
                    alt="Bild vom Zivilschutzalarm-Informationen."
                    width={1000}
                    height={1413}
            ></Image>

        </div>

    )
}

export default Notfall

