import axios from "axios";

const apiGitHub = axios.create({ baseURL: "https://api.github.com/users" })

export default apiGitHub;