import { useEffect, useState } from 'react';

import { db } from '@/components/Firebase';

function useFirebase(collection, condition) {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        let collectionRef = db.collection(collection).orderBy('createdAt');
        if (condition) {
            if (!condition.compareValue || !condition.compareValue.length) {
                // reset documents data
                setDocuments([]);
                return;
            }

            collectionRef = collectionRef.where(condition.fieldName, condition.operator, condition.compareValue);
        }

        const unsubscribe = collectionRef.onSnapshot((snapshot) => {
            const documents = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            setDocuments(documents);
        });

        return unsubscribe;
    }, [collection, condition]);

    console.log(documents);

    return documents;
}

export default useFirebase;
