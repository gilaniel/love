import { ContentResponse, SeriesItem } from "@/types/model";
import { faq } from "./faq";
import axios from "axios";

export async function fetchSeries(id?: number) {
  const params = id ? { id } : { is_open: true };

  const { data } = await axios.post<SeriesItem[]>(
    "https://drama-ru.kedoo.com/api/brand/list",
    params
  );

  return data;
}

export async function fetchContent(id: number) {
  const params = { brand_id: id, limit: 70, offset: 0, order_by: "season" };

  const { data } = await axios.post<ContentResponse>(
    "https://drama-ru.kedoo.com/api/content/list",
    params
  );

  return data;
}

export async function fetchFaq() {
  return Promise.resolve(faq);
}
