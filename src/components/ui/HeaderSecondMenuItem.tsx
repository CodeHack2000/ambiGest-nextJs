'use client'

import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

interface HeaderSecondMenuItemProps {
  name: String
  isUserLogged: Boolean
}

const HeaderSecondMenuItem: FC<HeaderSecondMenuItemProps> = ({name, isUserLogged}) => {
    const [iconImg, setIconImg] = useState(``)
    const [uri, setUri] = useState("")

    useEffect(() => {
        if (name === "user") {
          setIconImg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>`)
          setUri("#")
        } else if (name === "help") {
          setIconImg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" /></svg>`)
          setUri("#")
        } else if (name === "therms") {
          setIconImg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>`)
          setUri("#")
        } else if (name === "phone") {
          setIconImg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>`)
          setUri("/contacts")
        } else if (name === "logout") {
          setIconImg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" /></svg>`)
          setUri("#")
        } else if (name === "facebook") {
          setIconImg(`<svg height="100%" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z" fill="#ffffff"/></svg>`)
          setUri("#")
        } else if (name === "google") {
          setIconImg(`<svg height="100%" id="Layer_1" style="enable-background:new 0 0 56.6934 56.6934;" version="1.1" viewBox="0 0 56.6934 56.6934" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M51.981,24.4812c-7.7173-0.0038-15.4346-0.0019-23.1518-0.001c0.001,3.2009-0.0038,6.4018,0.0019,9.6017  c4.4693-0.001,8.9386-0.0019,13.407,0c-0.5179,3.0673-2.3408,5.8723-4.9258,7.5991c-1.625,1.0926-3.492,1.8018-5.4168,2.139  c-1.9372,0.3306-3.9389,0.3729-5.8713-0.0183c-1.9651-0.3921-3.8409-1.2108-5.4773-2.3649  c-2.6166-1.8383-4.6135-4.5279-5.6388-7.5549c-1.0484-3.0788-1.0561-6.5046,0.0048-9.5805  c0.7361-2.1679,1.9613-4.1705,3.5708-5.8002c1.9853-2.0324,4.5664-3.4853,7.3473-4.0811c2.3812-0.5083,4.8921-0.4113,7.2234,0.294  c1.9815,0.6016,3.8082,1.6874,5.3044,3.1163c1.5125-1.5039,3.0173-3.0164,4.527-4.5231c0.7918-0.811,1.624-1.5865,2.3908-2.4196  c-2.2928-2.1218-4.9805-3.8274-7.9172-4.9056C32.0723,4.0363,26.1097,3.995,20.7871,5.8372  C14.7889,7.8907,9.6815,12.3763,6.8497,18.0459c-0.9859,1.9536-1.7057,4.0388-2.1381,6.1836  C3.6238,29.5732,4.382,35.2707,6.8468,40.1378c1.6019,3.1768,3.8985,6.001,6.6843,8.215c2.6282,2.0958,5.6916,3.6439,8.9396,4.5078  c4.0984,1.0993,8.461,1.0743,12.5864,0.1355c3.7284-0.8581,7.256-2.6397,10.0725-5.24c2.977-2.7358,5.1006-6.3403,6.2249-10.2138  C52.5807,33.3171,52.7498,28.8064,51.981,24.4812z" fill="#ffffff"/></svg>`)
          setUri("#")
        } else if (name === "apple") {
          setIconImg(`<svg fill="#ffffff" enable-background="new 0 0 56.693 56.693" height="100%" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M41.777,30.517c-0.062-6.232,5.082-9.221,5.312-9.372c-2.891-4.227-7.395-4.807-8.998-4.873   c-3.83-0.389-7.477,2.256-9.42,2.256c-1.939,0-4.941-2.199-8.117-2.143c-4.178,0.062-8.029,2.43-10.179,6.17   c-4.339,7.527-1.11,18.682,3.118,24.791c2.067,2.986,4.532,6.346,7.766,6.223c3.117-0.123,4.293-2.016,8.061-2.016   s4.826,2.016,8.123,1.953c3.352-0.061,5.477-3.043,7.527-6.041c2.373-3.469,3.35-6.828,3.408-6.998   C48.305,40.433,41.844,37.958,41.777,30.517z"/><path d="M35.582,12.229c1.715-2.082,2.877-4.975,2.561-7.855c-2.475,0.1-5.471,1.645-7.248,3.725   c-1.592,1.846-2.984,4.785-2.611,7.613C31.045,15.926,33.861,14.307,35.582,12.229z"/></g></svg>`)
          setUri("#")
        }
    }, [name])

  return (
    <Link href={uri}>
      {isUserLogged ? (
        <div className='w-10 h-14 bg-primary-dark rounded-md flex items-center justify-center absolute shadow shadow-black hover:h-20 cursor-pointer group transition-height duration-300 ease-in-out' style={{zIndex: 1, top: "-4px"}}>
          <div id='secondMenuItem' dangerouslySetInnerHTML={{__html: iconImg}} className='text-white w-8 h-6 group-hover:mt-6 group-transition-margin duration-150 ease-in-out'></div>
        </div>
      ) : (
        <div className='w-10 h-14 bg-primary-dark rounded-md flex items-center justify-center absolute shadow shadow-black hover:h-20 cursor-pointer group transition-height duration-300 ease-in-out' style={{zIndex: 1, top: "-4px"}}>
          <div id='secondMenuItem' dangerouslySetInnerHTML={{__html: iconImg}} className='text-white w-8 h-7 group-hover:mt-8 group-transition-margin duration-150 ease-in-out mt-3'></div>
        </div>
      )}
    </Link>
  )
}

export default HeaderSecondMenuItem