import axios from "axios";

const getUserRepos = async (userName) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${userName}/repos`);
    return response.data;
  } catch (e) {
    console.error(e, 'Unexpected error when fetching repos from github');
    throw e;
  }
}

export default getUserRepos;