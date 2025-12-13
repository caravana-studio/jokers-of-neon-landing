const API_URL =
  import.meta.env.VITE_GAME_API_URL ||
  import.meta.env.VITE_API_URL ||
  "https://jokers-of-neon-api-zf1x.onrender.com";

const API_KEY = import.meta.env.VITE_GAME_API_KEY || "";

export async function registerEarlyAccess(user: string, address: string) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (API_KEY) {
    headers["X-API-Key"] = API_KEY;
  }

  const response = await fetch(`${API_URL}/api/early_access/register`, {
    method: "POST",
    headers,
    body: JSON.stringify({ user, address }),
  });

  if (!response.ok) {
    const error = new Error(`Register failed with status ${response.status}`);
    (error as any).status = response.status;
    throw error;
  }

  return response;
}
