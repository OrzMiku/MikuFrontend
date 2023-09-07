import { Md5 } from "ts-md5";
const envs = import.meta.env;

const site = {
  /*
   * 站点配置
   */
  // 站点标题
  title: envs.VITE_SITE_TITLE || "EcyPink",
  // 站点描述
  description: envs.VITE_SITE_DESCRIPTION || "神奇の赵贰的个人主页",
  // 站点关键字
  keywords:
    envs.VITE_SITE_KEYWORDS || "神奇の赵贰,OrzMiku,个人主页,EcyPink,MikuShow",
  // 是否显示初音看板娘
  miku: ((): boolean => {
    if (envs.VITE_MIKU) {
      return envs.VITE_MIKU === "true";
    }
    return true;
  })(),
  // 友情链接
  links: (() => {
    if (envs.VITE_SITE_LINKS) {
      return JSON.parse(envs.VITE_SITE_LINKS);
    }
    return [];
  })(),
  // 导航栏（path对应站内链接，url对应站外链接）
  navs: (() => {
    if (envs.VITE_SITE_NAVS) {
      return JSON.parse(envs.VITE_SITE_NAVS);
    }
    return [
      {
        text: "关于",
        path: "/Home",
      },
      {
        text: "友情链接",
        path: "/Links",
      },
      {
        text: "Github",
        url: "https://github.com/OrzMiku",
      },
    ];
  })(),
  foot: envs.VITE_SITE_FOOTER || "www.miku.show",
  icp: envs.VITE_SITE_ICP || "萌ICP备20233993号",

  /*
   * 个人资料配置
   */
  profile: {
    name: envs.VITE_PROFILE_NAME || "神奇の赵贰",
    slogan:
      envs.VITE_PROFILE_SLOGAN || "求知若渴，虚心若愚，读万卷书，行万里路",
    avatar: (() => {
      return (
        envs.VITE_PROFILE_AVATAR ||
        `https://www.gravatar.com/avatar/${Md5.hashStr(
          envs.VITE_PROFILE_EMAIL || "miku.ecy.pink"
        )}?s=640`
      );
    })(),
    description:
      envs.VITE_PROFILE_DESCRIPTION ||
      `<p>在校大学生，校园蛀虫一只。</p>
      <p>懒狗且菜比。</p>
      <p>学习计算机，但是弱鸡。</p>
      <p>代码，游戏，动漫，人生三大美事。</p>
      <p>正在变成肥宅，渴望周游世界，吃遍美食。</p>`,
    tags: ((): Array<string> => {
      if (envs.VITE_PROFILE_TAGS) {
        return (envs.VITE_PROFILE_TAGS as string).split(",");
      } else {
        return ["宅", "二刺螈", "菜鸡", "00后", "剑网三", "双梦@糖心水蜜桃"];
      }
    })(),
    email: envs.VITE_PROFILE_EMAIL || "miku@ecy.pink",
  },
};

export default site;
