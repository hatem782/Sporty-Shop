import axios from "axios";

const { REACT_APP_HostMailService, REACT_APP_MAIL } = process.env;

export const SendMailServ = async (mail) => {
  try {
    const res = await axios.post(REACT_APP_HostMailService, {
      ...mail,
      from: REACT_APP_MAIL,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
