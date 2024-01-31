import axios from "axios";

const globalUrl = "https://www.codewars.com/api/v1/users/";
const userName = "ernest07dec";
export const retrieveCwProfile = async () => {
  const header = {
    "Content-Type": "application/json",
  };

  const response = await axios.get(`${globalUrl}/${userName}`, {
    headers: header,
  });
  return response.data;
};
