import { client } from "./microcms";

export async function getContact() {
  const data = await client.get({
    endpoint: "contact",
  });
  return data;
}
