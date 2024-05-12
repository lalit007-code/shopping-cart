"use server";

export default async function fetchAllProdccts() {
  try {
    const result = await fetch("https://dummyjson.com/products", {
      method: "GET",
      cache: "no-store",
    });

    const data = await result.json();
    return {
      success: true,
      data: data?.products,
    };
  } catch (e) {
    return {
      success: false,
      message: "try again",
    };
  }
}

export async function fetchProductDetails(currentProductId) {
  try {
    const result = await fetch(
      `https://dummyjson.com/products/${currentProductId}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await result.json();
    return data;
  } catch (e) {
    return {
      success: false,
      message: "try again",
    };
  }
}
