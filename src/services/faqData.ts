// export async function faqData() {
//     const response = await fetch(`${URL}/FaqData`);
//     if (!response.ok) {
//         throw new Error('Failed to fetch Faq data');
//     }
//     const data = await response.json();
//     return data;
// }

import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '@/services/firebase'
import type { IFaqProps } from '..'

export const faqData = async (): Promise<IFaqProps[]> => {
    const q = query(collection(db, 'faqs'))
    const snapshot = await getDocs(q)

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<IFaqProps, 'id'>),
    }))
}
