import React, { useState, useEffect ,useRef } from "react"
import Layout from "../../components/Layout"

import image1 from '../../images/gallery/daytoday/image1.jpg'
import image2 from '../../images/gallery/daytoday/image2.jpg'
import image3 from '../../images/gallery/daytoday/image3.jpg'

import gallery from '../../data/gallery.json'

import './daytoday.scss'

export default function DayToDay() {

    const [popup, setPopup] = useState(false)
    const [image, setImage] = useState(0)
    let images = [image1, image2, image3]

    const openImage = (image) => {
        setImage(image)
        setPopup(true)
    }

    let popupRef = useRef()

    useEffect(() => {

        let handler = (event) => {
            if (!popupRef.current.contains(event.target)) {
                setPopup(false)
            }
          }
          document.addEventListener("mousedown", handler)
      
          return () => {
            document.removeEventListener("mousedown", handler)
          }

    })

    return (
        <Layout title="DayToDay">
            <div className="TopMessageProject">
                <h1>DayToDay</h1>
                <h4>A Desktop Application to manage the daily tasks and 
                    the track your productivity
                </h4>
            </div>
            <div className="ActionBoxContainer">
                {gallery[0].items[0].images.map(i => 
                    <div key={i.id} className="ActionBox">
                        <img onClick={() => openImage(i.image)} src={images[i.image]} alt={i.caption} />
                    </div>
                )}
            </div>

            <div className={popup ? 'ImagePopup' : 'ImagePopup_hidden'}>
                <div ref={popupRef} className="ImagePopupInner">
                    <img src={images[image]} />
                </div>
            </div>

        </Layout>
    )
}