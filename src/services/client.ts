import axios from "axios";

const client = axios.create({baseURL:"https://qa.corider.in/assignment"});

export default client
