import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Usuarios = () => {

    const [users, setUsers] = useState({ results: [] });

    const { paisId } = useParams()

    useEffect(() => {
      async function fetchData() {
        const response = await fetch(`https://randomuser.me/api/?results=3`)
        setUsers(await response.json())
      }
      fetchData()
    }, [])

    return (
      <div>
        {users.results.filter(user => user.location.country === paisId).map(user => (
          <div key={user.login.uuid}>
            <p>Nombre: {user.name.first}</p>
            <p>Apellido: {user.name.last}</p>
            <p>Email: {user.email}</p>
            <img src={user.picture.medium} alt="image" />
          </div>
        ))}
      </div>
    )
}
