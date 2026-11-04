const API_URI = "https://fakestoreapi.com/products";

export const getProducts = async () => {
    try {
        const response = await fetch(API_URI);

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        return data;

    } catch (error) {
        throw error;
    }
};