import { firestore /*auth, firebase*/ } from "../config/firebase";

export const eventsStore = firestore.collection("events");
export const eventsShow = eventsStore.where("deleted", "==", false);

export const AddEve = async (item) => {
  eventsStore.add({ ...item });
};

export const UpdateEve = async (item) => {
  eventsStore.doc(item.id).update({ ...item });
};

export const DeleteFakeEve = async (item) => {
  eventsStore.doc(item.id).update({ deleted: true });
};

export const DeleteEve = async (item) => {
  eventsStore.doc(item.id).delete();
};

/*const deleteH = (key, refrech) => {
  dbHotels
    .child(key)
    .remove()
    .then(() => {
      refrech();
    });
};*/
//const [messages] = useCollectionData(test, { idField: "message" });
