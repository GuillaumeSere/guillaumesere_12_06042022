import React from "react";
import { useState, useEffect } from "react";
import { getData } from "../utils/getData";
import { useParams } from "react-router";
import SideBar from "../components/SideBar";
import UserInfos from "../components/UserInfos";
import {Main, Container, Content, BottomChart} from "../styles/userStyle";
import caloriesIcon from "../assets/calories-icon.svg";
import proteinsIcon from "../assets/proteines-icon.svg";
import glucidesIcon from "../assets/glucides-icon.svg";
import lipidesIcon from "../assets/lipides-icon.svg";
import BarCharts from "../components/BarChart";
import ScoreChart from "../components/ScoreChart";
import KeyData from "../components/KeyData";
import UserAverageSessions from "../components/UserAverageSession";
import UserPerformance from "../components/UserPerformance";

/**Render the dashboard
 * @return {JSX}
 */
 export default function User() {
     
  const [data, setData] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_MAIN_DATA",id);
      if (!request) return alert("data error");
      setData(request.data);
    };
    data();
  }, [id]);
  if (data.length === 0) return null;

  return (
    <Main>
      <SideBar />
      <Container>
      <UserInfos name={data.userInfos.firstName} />
      <Content>
          <section>
            <BarCharts />
            <BottomChart>
              <UserAverageSessions />
              <UserPerformance />
              <ScoreChart data={data} />
            </BottomChart>
          </section>
          <aside>
            <KeyData
              icon={caloriesIcon}
              info={`${data.keyData.calorieCount}kCal`}
              text="Calories"
            />
            <KeyData
              icon={proteinsIcon}
              info={`${data.keyData.proteinCount}g`}
              text="Proteines"
            />
            <KeyData
              icon={glucidesIcon}
              info={`${data.keyData.carbohydrateCount}g`}
              text="Glucides"
            />
            <KeyData
              icon={lipidesIcon}
              info={`${data.keyData.lipidCount}g`}
              text="Lipides"
            />
          </aside>
        </Content>
      </Container>
    </Main>
  );
};
