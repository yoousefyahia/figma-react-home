import axiosClient from "../api/Flash-api";

export async function fetchProducts(limit = 8) {
  const { data } = await axiosClient.get(`products?limit=${limit}`);
  return data.products;
}
