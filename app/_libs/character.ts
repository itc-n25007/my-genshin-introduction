import { client } from "./microcms";
import type { MicroCMSListResponse } from "microcms-js-sdk";

export type Character = {
  id: string;
  name: string;
  element: string;
  description: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
};

const PER_PAGE = 9;

/**キャラクター一覧を取得（ページ対応） */
export const getCharacters = async (page = 1, searchQuery?: string) => {
  const data = await client.get<MicroCMSListResponse<Character>>({
    endpoint: "characters",
    queries: {
      limit: PER_PAGE,
      offset: (page - 1) * PER_PAGE,
      q: searchQuery || undefined,
    },
  });

  return {
    characters: data.contents,
    totalCount: data.totalCount,
  };
};

/**キャラクター詳細を取得 */
export const getCharacterById = async (id: string) => {
  const data = await client.get<Character>({
    endpoint: "characters",
    contentId: id,
  });

  return data;
};
