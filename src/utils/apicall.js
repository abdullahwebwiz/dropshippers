// utils/api.js

export async function apiCall(url, method, body) {
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json", // Adjust content type if necessary
      },
      body: body ? JSON.stringify(body) : null,
    };

    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
