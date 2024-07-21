export async function validateSession() {
    const response = await fetch("/api/validate", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Custom-Origin": process.env.NEXT_PUBLIC_ORIGIN?.toString() ?? "",
        Host: process.env.NEXT_PUBLIC_ORIGIN?.toString() ?? "",
      },
    });
    const data = await response.json();
    return data;
  }