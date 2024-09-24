import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UsersByCountry = () => {
  let { country } = useParams();

  const getUsersByCountryUrl = `https://randomuser.me/api/?nat=${country}`;

  const [usersByCountry, setUsersByCountry] = useState([]);

  useEffect(() => {
    async function getUsersByCountry() {
      const getUsersByCountryRes = await fetch(getUsersByCountryUrl);
      const usersByCountryData = await getUsersByCountryRes.json();
      setUsersByCountry(usersByCountryData);
    }
    getUsersByCountry();
  }, []);

  const gotUsersByCountry = usersByCountry.results?.map((userByCountry) => (
    <div>
    <img src={userByCountry.picture.medium} />
    <li>{userByCountry.name.first}</li>
    <li>{userByCountry.name.last}</li>
    <li>{userByCountry.email}</li>
    <li>{userByCountry.location.country}</li>
  </div>
  ));

  return (
    <>
      <div>
        <ul>{gotUsersByCountry}</ul>
      </div>
    </>
  );
};
