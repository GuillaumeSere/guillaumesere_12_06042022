import React from "react";
import { useState, useEffect } from "react";
import { getUserInfos } from "../utils/data";
import { useParams } from "react-router";
import SideBar from "../components/SideBar";
import UserInfos from "../components/UserInfos";
import {Main, Container} from "../styles/userStyle";

/**Render the dashboard
 * @return {JSX}
 */
const User = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    const getData = async () => {
      const request = await getUserInfos(id);
      if (!request) return alert("data error");
      setData(request.data);
    };
    getData();
  }, [id]);
  if (data.length === 0) return null;

  return (
    <Main>
      <SideBar />
      <Container>
      <UserInfos name={data.userInfos.firstName} />
      </Container>
    </Main>
  );
};

export default User;