import { set } from "lodash"
import React, { useState, useEffect } from "react"
import api from '../../data/api'

export default function CinemaAPI() {

    const [genres, setGenres] = useState([])
    const [authorization, setAuthorization] = useState()

     const getToken = async (user, password) => {

        const response = await api.post('/token', {
            "user": "admin",
            "password": "admin123"
        })

        setAuthorization(response.data)
        console.log(response.data)
        return response
    }

    const fetchGenres = async () => {
        const response = await api.get('/genre', {
            headers: { "Authorization": `Bearer ${authorization !== undefined ? authorization.token : ''}` }
        })

        console.log(response.data.data)
        setGenres(response.data.data)
    }

    // useEffect(() => {
    //     axios.get('https://localhost:44389/actor')
    //     .then(res => {
    //         console.log(res)
    //         setActors(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // })

    return (
        <div>
            <button onClick={() => getToken('admin','admin123')} type="button">Generar token</button>
            <button onClick={fetchGenres} type="button">Print genres</button>
            <ul>
                {
                    genres.map(genre => <li key={genre.id}>{genre.name}</li>)
                }
            </ul>
        </div>
    )
}