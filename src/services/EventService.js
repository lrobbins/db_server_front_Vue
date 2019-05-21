// extremely important. Disable CORS in Chrome.
// Quit Chrome.
// In Terminal:
//		open -a Google\ Chrome --args --disable-web-security --user-data-dir=""



import axios from 'axios'
// old to do with events demo. Kill off later.
const apiClient2 = axios.create({
  baseURL: `http://localhost:3010`,                             // set URL port to whatever being used in Node Database Server
  withCredentials: false, // This is the default
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})









const apiClient = axios.create({
  baseURL: `http://localhost:3001`,                             // set URL port to whatever being used in Node Database Server
  withCredentials: false, // This is the default
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getVerbList(){
    return apiClient.get('/db')
  },

  getVerb(id) {
    return apiClient.get('/db/' + id)
  },

  getEvents() {
    return apiClient2.get('/events')
  },
  getEvent(id) {
    return apiClient2.get('/events/' + id)
  },
  modEvent(id) {
    return axios.put('http://localhost:3000/events/1/', {
        title: "Beach Cleanup_______",
        date: "Aug 28 2018",
        time: "10:00",
        location: "Daytona Beach",
        description : "Let's clean up this beach.",
        organizer: "Adam Jahr",
        category: "sustainability",
        attendees: [
          {
            id: "abc123",
            name: "Adam Jahr"
          },
          {
            id: "def456",
            name: "Gregg Pollack"
          },
          {
            id: "ghi789",
            name: "Beth Swansonnnn"
          },
          {
            id: "jkl101",
            name: "Mary Gordon"
          }
        ]
      }).then(resp => {
        console.log(resp.data);
      }).catch(error => {
        if (error !== null) {
          console.log("Update error: " + error.response)
        }
     });
  }
}
