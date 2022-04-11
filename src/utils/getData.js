import { getUserActivity, getUserAverageSessions, getUserInfos, getUserPerformance } from "./dataMocked";

  /**
   * 
   * @param {string} type 
   * @param {number} id 
   * @returns {Array}
   */
  
  export const getData = async (type, id) => {
    let data = [];
    console.log(type);
    // eslint-disable-next-line default-case
    switch (type) {
      case "USER_ACTIVITY":
        data = await getUserActivity(id);
        console.log(data);
        break;
      case "USER_PERFORMANCE":
        data = await getUserPerformance(id);
        console.log(data);
        break;
      case "USER_AVERAGE_SESSIONS":
        data = await getUserAverageSessions(id);
        console.log(data);
        break;
      case "USER_MAIN_DATA":
        data = await getUserInfos(id);
        console.log(data);
        break;
    }
    return data;
  };