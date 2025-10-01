import { ContentResponse, SeriesItem, TagItem } from "@/types/model";
import { faq } from "./faq";
import axios from "axios";

export async function fetchSeries(id?: number) {
  const params = id ? { id } : { is_open: true };

  const { data } = await axios.post<SeriesItem[]>(
    "https://drama.kedoo.com/api/brand/list",
    params,
    {
      headers: {
        Authorization: "Basic d2FwdGFrMTI6d2FwdGFrMTI=",
      },
    }
  );

  return data;
}

export async function fetchTags() {
  const { data } = await axios.post<TagItem[]>(
    "https://drama.kedoo.com/api/tag/list_with_brands",
    {},
    {
      headers: {
        Authorization: "Basic d2FwdGFrMTI6d2FwdGFrMTI=",
      },
    }
  );

  return data;
}

export async function fetchContent(id: number) {
  const params = { brand_id: id, limit: 70, offset: 0, order_by: "season" };

  const { data } = await axios.post<ContentResponse>(
    "https://drama.kedoo.com/api/content/list",
    params,
    {
      headers: {
        Authorization: "Basic d2FwdGFrMTI6d2FwdGFrMTI=",
      },
    }
  );

  return data;
}

export async function fetchFaq() {
  return Promise.resolve(faq);
}
