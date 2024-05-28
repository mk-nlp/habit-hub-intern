export async function validateSession() {
    const response = await fetch("/api/validate", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Custom-Origin": "http://localhost:3000",
        Host: "http://localhost:3000",
      },
    });
    const data = await response.json();
    return data;
  }