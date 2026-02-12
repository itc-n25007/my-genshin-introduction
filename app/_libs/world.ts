import { client } from "./microcms";
import { World } from "../_types/world";

export async function getWorldList() {
  const res = await client.getList<World>({
    endpoint: "world",
    queries: {
      orders: "order",
    },
  });

  return res.contents;
}
