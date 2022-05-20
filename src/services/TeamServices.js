import { firestore /*auth, firebase*/ } from "../config/firebase";

export const teamStore = firestore.collection("team");
export const teamShow = teamStore.where("deleted", "==", false);

export const AddTm = async (item) => {
  await teamStore.add({ ...item });
};

export const UpdateTm = async (item) => {
  await teamStore.doc(item.id).update({ ...item });
};

export const DeleteFakeTm = async (item) => {
  await teamStore.doc(item.id).update({ deleted: true });
};

export const DeleteTm = async (item) => {
  await teamStore.doc(item.id).delete();
};
