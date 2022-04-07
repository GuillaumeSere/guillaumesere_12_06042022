import React, { useState, useEffect } from "react";
import { Container, Title } from "../styles/userAverageSessionStyle";
import { getData } from '../utils/getData';
import { useParams } from "react-router";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import SessionsToolType from "./SessionsToolType.js";


/**
 * Render a LineChart with user average sessions Data
 * @return {JSX}
 */

function UserAverageSessions() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getAverageSessions = async () => {
      const request = await getData("USER_AVERAGE_SESSIONS",id);
      if (!request) return alert("data error");
      const formatData = request.data.sessions.map((data) => {
          console.log(data.day)
        switch (data.day) {
          case 1:
            return { ...data, day: "L" };
          case 2:
            return { ...data, day: "M" };
          case 3:
            return { ...data, day: "M" };
          case 4:
            return { ...data, day: "J" };
          case 5:
            return { ...data, day: "V" };
          case 6:
            return { ...data, day: "S" };
          case 7:
            return { ...data, day: "D" };
          default:
            return { ...data };
        }
      });
      setData(formatData);
    };
    getAverageSessions();
  }, [id]);
  if (data.length === 0) return null;

  return (
    <Container>
      <Title>Durée moyenne des sessions</Title>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            type="category"
            dataKey="day"
            tickLine={false}
            tick={{ fontSize: 14, stroke: "rgba(255, 255, 255, 0.7)" }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            hide={true}
          />
          <Tooltip content={<SessionsToolType />} />
          <Line
            type="monotone"
            padding={{ left: 10 }}
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default UserAverageSessions;