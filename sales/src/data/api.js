export async function fetchCategories() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw new Error('Failed to fetch categories');
    }
}

export async function fetchProduct(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        throw new Error('Failed to fetch product');
    }
}
