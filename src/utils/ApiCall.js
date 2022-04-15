import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:3000/`
});

const ApiCall = {

    /**
 * Get User activity
 * @param {number} id
 * @returns {object} 
 */
     getUserActivity: (id) => {
        return api.get(`user/${id}/activity`).then(response => {
            return response.data;
        })
    },

  /**
   * Get User Infos
   * @param {number} id
   * @returns {object}
   */
    getUserInfos: (id) => {
        return api.get(`user/${id}`).then(response => {
            return response.data;
        })
    },
  
  /**
   * Get User Performance
   * @param {number} id
   * @returns {object}
   */
   getUserPerformance: (id) => {
    return api.get(`user/${id}/performance`).then(response => {
        return response.data;
    })
},

  /**
   * Get User Average Session
   * @param {number} id
   * @returns {object}
   */
   getUserAverageSessions: (id) => {
    return api.get(`user/${id}/average-sessions`).then(response => {
        return response.data;
    })
},
}

export { ApiCall };
