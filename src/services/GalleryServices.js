import { firestore /*auth, firebase*/ } from "../config/firebase";

export const galleryStore = firestore.collection("gallery");
export const galleryShow = galleryStore.where("deleted", "==", false);

export const AddGal = async (item) => {
  await galleryStore.add({ ...item });
};

export const UpdateGal = async (item) => {
  await galleryStore.doc(item.id).update({ ...item });
};

export const DeleteFakeGal = async (item) => {
  await galleryStore.doc(item.id).update({ deleted: true });
};

export const DeleteGal = async (item) => {
  await galleryStore.doc(item.id).delete();
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
