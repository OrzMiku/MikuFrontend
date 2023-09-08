import { type mikureqPrimise } from "mikureq";
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
declare const getHitokoto: (params: object) => mikureqPrimise<hitokotoResponse>;
export default getHitokoto;
//# sourceMappingURL=main.d.ts.map
