/*import styles from "./page.module.css";
import { client } from "../../_libs/microcms";
import { notFound } from "next/navigation";

export default async function CharacterDetailPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const character = await client.get({
      endpoint: "characters",
      contentId: params.id,
    });

    return (
      <main>
        <h1>{character.name}</h1>
        <p>元素:{character.element}</p>
        <p>{character.description}</p>
      </main>
    );
  } catch {
    notFound();
  }
}*/

import { getCharacterById } from "@/app/_libs/character";
import Image from "next/image";

type Props = {
  params: { id: string };
};

export default async function CharacterDetailPage({ params }: Props) {
  const character = await getCharacterById(params.id);

  return (
    <article>
      <h1>{character.name}</h1>

      {character.image && (
        <Image
          src={character.image.url}
          alt={character.name}
          width={character.image.width}
          height={character.image.height}
        />
      )}

      <p>{character.description}</p>
    </article>
  );
}
