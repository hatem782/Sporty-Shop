import { firestore /*auth, firebase*/ } from "../config/firebase";

export const messagesStore = firestore.collection("messages");
export const messagesShow = messagesStore.where("deleted", "==", false);

export const DeleteFakeMessage = async (item) => {
  messagesStore.doc(item.id).update({ deleted: true });
};

export const DeleteMessage = async (item) => {
  messagesStore.doc(item.id).delete();
};
