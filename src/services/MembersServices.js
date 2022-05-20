import { firestore /*auth, firebase*/ } from "../config/firebase";
import axios from "axios";

export const membersStore = firestore.collection("members");
//export const membersShow = membersStore.where("deleted", "==", false);

const { REACT_APP_API_HOST } = process.env;

export const GetVisitsStats = async () => {
  try {
    return await axios.get(`${REACT_APP_API_HOST}/api/users/number_of_users`);
  } catch (error) {
    console.log(error);
  }
};

export const GetContactsStats = async () => {
  try {
    return await axios.get(
      `${REACT_APP_API_HOST}/api/contacts/number_of_contacts`
    );
  } catch (error) {
    console.log(error);
  }
};

export const DeleteFakeMember = async (item) => {
  membersStore.doc(item.id).update({ deleted: true });
};

export const DeleteMember = async (item) => {
  membersStore.doc(item.id).delete();
};

export const DisableMember = async (item) => {
  await membersStore.doc(item.id).update({ ...item, blocked: true });
};

export const EnableMember = async (item) => {
  await membersStore.doc(item.id).update({ ...item, blocked: false });
};
