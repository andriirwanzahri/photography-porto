import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/services/firebase"
import { galleryData } from "../../data/seedGalleryData"

export const seeder = async () => {
  try {
    // Upload Gallery
    for (const item of galleryData) {
      await addDoc(collection(db, "galleries"), {
        ...item,
        createdAt: serverTimestamp(),
      })
    }

    // // Upload FAQ
    // for (const faq of faqData) {
    //   await addDoc(collection(db, "faqs"), {
    //     ...faq,
    //     createdAt: serverTimestamp(),
    //   })
    // }

    console.log("✅ Firestore seed completed")
  } catch (error) {
    console.error("❌ Firestore seed error:", error)
  }
}
