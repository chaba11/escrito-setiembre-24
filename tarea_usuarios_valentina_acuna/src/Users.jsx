import { useEffect, useState } from "react";

export const Users = () => {
  const getUsersUrl = "https://randomuser.me/api/?results=3";

  const [users, setUsers] = useState([]);
  // const [click, setClick] = useState(false)

  // const handeClick = () => {
  //   setClick((prev) => true)
  //   getUsers()
  // }

  // const getUsers = async () => {
  //   try{
  //   const getUsersRes = await fetch(getUsersUrl)
  //   const getUsersData = await getUsersRes.json()
  //   setUsers(getUsersData)
  //   } catch {}
  // }

  useEffect(() => {
    async function getUsers() {
      const getUsersRes = await fetch(getUsersUrl);
      const getUsersData = await getUsersRes.json();
      setUsers(getUsersData);
    }
    getUsers();
  }, []);

  const gotUsers = users.results?.map((user) => (
    <div>
      <img src={user.picture.medium} />
      <li>{user.name.first}</li>
      <li>{user.name.last}</li>
      <li>{user.email}</li>
      <li>{user.location.country}</li>
    </div>
  ));

  return (
    <>
      <div>
        {/* <button onClick={handeClick}> Get users </button> */}
        <ul>{gotUsers}</ul>
      </div>
    </>
  );
};
