export default function getProduct() {
    return fetch('/api/product').then(res => res.json());
}

