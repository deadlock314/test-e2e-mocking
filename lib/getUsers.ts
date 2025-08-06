export async function getUsers() {
  try {
    const useMock = process.env.API_MOCK === "true";
    let fetchUrl: string;

    if (useMock) {
      // Use Vercel URL if available, otherwise use localhost for local dev
      const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
      if (vercelUrl) {
        fetchUrl = `https://${vercelUrl}/api/users`;
      } else {
        fetchUrl = `http://localhost:3000/api/users`;
      }
    } else {
      fetchUrl = "https://jsonplaceholder.typicode.com/users";
    }

    const res = await fetch(fetchUrl, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch users");
    return { users: await res.json(), error: null };
  } catch (error: any) {
    return { users: [], error: error.message || "Unknown error" };
  }
}
