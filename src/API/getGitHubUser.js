import axios from "axios";

const getGitHubUser = async (userName) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${userName}`);
    return response.data;
  } catch (e) {
    if (e.response.status === 404) {
      return null;
    }
    console.error(e, 'Unexpected error when fetching user from github');
    throw e;
  }
}

export default getGitHubUser;