export async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Failed to fetch users");
    return { users: await res.json(), error: null };
  } catch (error: any) {
    return { users: [], error: error.message || "Unknown error" };
  }
}




