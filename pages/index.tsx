import Head from 'next/head'
import { Component } from 'react';
import React from 'react'
import { db } from '../config/firebase' 
import Image from 'next/image'


/*class Home_2 extends Component{
  componentDidMount() {
    db.collection('posts').get().then((snapshot =>{
      const posts = snapshot.docs;
      console.log(posts[0])
    }))
  }
}
*/
export default function Home(){
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Head>
        <title>FF Laimbach am Ostrong</title>
        <link rel="icon" href="/Logo.png" />
      </Head>
      <ul>
      <CardItem überschrift="B2 Fahrzeugbrand auf der B36"
                text="Am 7.1.2021 wurden wir um 08:10 zu einem Fahrzeugbrand auf die B36 nähe Fam. Spiesmayer gerufen.
                Aus bisher unbekannter Ursache entstand im Motorraum eines LKWs ein Brand. Aufgrund dieser Voraussetzungen wurde umgehen auf die Alarmstufe B2 alarmiert. 
                Durch das schnelle Eintreffen unserer Einsatzkräfte konnte eine Ausbreitung verhindert werden. Alle Beteiligten konnten sich aus dem Fahrzeug selbständig retten."/>

      </ul>

      </div>
  )
}
export const CardItem = props =>(
  <li>



    <div className="relative text-xs sm:text-base m-2 border-2 border-red-600 p-2 display: inline-block sm:m-8 sm:border-8 sm:p-8"> 
    <h1 className="">{props.überschrift}</h1>
    <p>{props.text}</p>
    </div>
    

  </li>
    
);
