import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '@/services/firebase'
import type { IGalleryProps } from '..'

export const getDataGallery = async (): Promise<IGalleryProps[]> => {
    const q = query(collection(db, 'galleries'), orderBy('createdAt', 'desc'))

    const snapshot = await getDocs(q)

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<IGalleryProps, 'id'>),
    }))
}
