import React from 'react'

const Notfall = () => {
    return (
        <div >
            <div className="m-8 border-8 border-red-600 p-8 display: inline-block">
                <h1 className="font-semibold text-3xl">Notruf - Die W Fragen</h1>

                <p>WO geschah es?</p>
                <p>WAS geschah?</p>
                <p>WIE viele Verletzte? </p>
                <p>WELCHE Art von Verletzungen?</p>
                <p>WARTEN auf Rückfragen?</p>


            </div>
            <div className="m-8 border-8 border-red-600 p-8 display: inline-block">
                <h1 className="font-semibold text-3xl">Notruf - Nummern</h1>

                <p>122 - Feuerwehr</p>
                <p>133 - Polizei </p>
                <p>144 - Rettung </p>
                <p>112 - Internationaler Notruf</p>
                <p>140 - Bergrettung</p>
                <p>128 - Gas-Notruf</p>

            </div>

            <div className="m-8 border-8 border-red-600 p-8 display: inline-block">
                <h1 className="font-semibold text-3xl">Wichtig</h1>

                <p>Selbstschutz vor Retten von anderen</p>
                <p>Man soll Anderen nur helfen wenn dies gefahrlos möglich ist</p>
                <p>Sonst auf das Eintreffen der Spezialkräfte warten </p>
                <p>Dies ist besonders wichtig in diesen Situationen: </p>
                <p>140 - Bergrettung</p>
                <p>128 - Gas-Notruf</p>

            </div>
        </div>

    )
}

export default Notfall

