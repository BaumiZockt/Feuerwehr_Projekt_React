import React from 'react'
import Image from 'next/image'

const neues = () => {

    const überschrift={
        color: "black",
        fontSize: "65px"
    }
    const überschrift2={
        color: "black",
        fontSize: "30px"
    }

    const content={
        border: "5px solid red"
        
    }


    return (
        <div>
            <h1 style={überschrift} class="text-center">Neuigkeiten</h1>
            <h2 style={überschrift2} class="text-center">Immer das neuste von der FF-Laimbach</h2>

                <div class="grid justify-items-center">
                    <div style={content} class="text-xs sm:text-base m-2 sm:m-6 sm:border-8 sm:p-6   border-2 border-red-600 p-2 display: inline-block box-content h-auto w-10/12">
                        <h3 style={überschrift2}>Servus</h3>
                        <p>Text Text Text Text Text Text Text Text </p>

                    </div>
                    <div style={content} class="text-xs sm:text-base m-2 sm:m-6 sm:border-8 sm:p-6   border-2 border-red-600 p-2 display: inline-block box-content h-auto w-10/12">
                        <h3 style={überschrift2}>Servus</h3>
                        <p>Text Text Text Text Text Text Text Text </p>

                    </div>
                    <div style={content} class="text-xs sm:text-base m-2 sm:m-6 sm:border-8 sm:p-6   border-2 border-red-600 p-2 display: inline-block box-content h-auto w-10/12">
                        <h3 style={überschrift2}>Servus</h3><br></br>
                        <p>Text Text Text Text Text Text Text Text </p>

                        <div class="border-4 border-black border-opacity-100 w-auto">
                            <Image class="hover:scale-200"
                                src="/logo.png"
                                alt="Test-Bild"
                                width={283.5}
                                height={360}
                            ></Image>
                        </div>
                        <p>LKSDAFJlkjdflökjasödfjasödkj</p>

                    </div>
                </div>

        </div>
    )
}

export default neues
