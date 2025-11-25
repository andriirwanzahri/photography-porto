
const URL = import.meta.env.VITE_API_URL;

export async function getDataGallery() {
    const response = await fetch(`${URL}/galleryData`);
    if (!response.ok) {
        throw new Error('Failed to fetch gallery data');
    }
    const data = await response.json();
    return data;
}
