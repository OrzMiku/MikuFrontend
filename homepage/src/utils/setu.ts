import mikureq from "mikureq";
import { useRoute } from "vue-router";

export function isR18() {
  const route = useRoute();
  const params = route.query;
  return parseInt(String(params["r18"])) ? true : false;
}

interface setuApiResponse {
  code?: number;
  alert?: string;
  pics: string[];
}

export const getSetu = async (r18: boolean) => {
  const params = {
    type: "json",
    sort: r18 ? "r18" : undefined,
  };
  const setuApi = "https://moe.jitsu.top";
  const req = new mikureq(setuApi);
  const res = await req.get<setuApiResponse>({
    url: "/api/",
    params,
  });
  return res;
};

export default getSetu;
