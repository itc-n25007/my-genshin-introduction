import type { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";

export type World = {
  title: string;
  description: string;
  image?: {
    url: string;
    height: number;
    width: number;
  };
  order: number;
} & MicroCMSContentId &
  MicroCMSDate;
