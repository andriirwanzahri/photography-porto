const URL = import.meta.env.VITE_API_URL;

export async function faqData() {
    const response = await fetch(`${URL}/FaqData`);
    if (!response.ok) {
        throw new Error('Failed to fetch Faq data');
    }
    const data = await response.json();
    return data;
}