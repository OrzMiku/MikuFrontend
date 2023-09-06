import mikureq, { type mikureqPrimise } from "mikureq";

interface hitokotoResponse {
  id: number;
  uuid?: string;
  hitokoto: string;
  type?: string;
  from?: string;
  from_who?: string;
  creator?: string;
  creator_uid?: number;
  reviewer?: number;
  commit_from?: string;
  created_at?: string;
  length?: number;
}

const getHitokoto = async (
  params: object
): mikureqPrimise<hitokotoResponse> => {
  const req = new mikureq();
  const res = await req.get({
    url: "https://v1.hitokoto.cn/",
    params,
  });
  return res;
};

export default getHitokoto;
