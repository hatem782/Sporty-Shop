import { firestore /*auth, firebase*/ } from "../config/firebase";

export const memoryStore = firestore.collection("ForumMemory");
export const memoryShow = memoryStore.where("deleted", "==", false);

export const AddMem = async (item) => {
  await memoryStore.add({ ...item });
};

export const UpdateMem = async (item) => {
  await memoryStore.doc(item.id).update({ ...item });
};

export const DeleteFakeMem = async (item) => {
  await memoryStore.doc(item.id).update({ deleted: true });
};

export const DeleteMem = async (item) => {
  await memoryStore.doc(item.id).delete();
};
