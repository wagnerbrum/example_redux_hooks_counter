import { firebaseDatabase } from "../utils/firebase";
import uuid from "uuid/v4";

export default class FirebaseService {
    static getDataList = (
        nodePath,
        callback,
        order = "createdAt",
        size = 10
    ) => {
        let query = firebaseDatabase
            .ref(nodePath)
            .orderByChild(order)
            .limitToLast(size);

        query.on("value", dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childrenSnapshot => {
                let item = childrenSnapshot.val();
                item["key"] = childrenSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };

    static addTask = title => {
        const id = uuid();

        firebaseDatabase.ref("tasks/" + id).set({
            id,
            title,
            createdAt: Date.now()
        });
    };

    static removeTask = id => {
        firebaseDatabase.ref(`tasks/${id}`).remove();
    };
}
