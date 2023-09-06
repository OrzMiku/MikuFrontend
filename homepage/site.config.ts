const envs = import.meta.env;

const site = {
  /*
   * 站点配置
   */
  // 站点标题
  title: envs.VITE_SITE_TITLE || envs.SITE_TITLE || "EcyPink",
  // 站点描述
  description:
    envs.VITE_SITE_DESCRIPTION ||
    envs.SITE_DESCRIPTION ||
    "神奇の赵贰的个人主页",
  // 站点关键字
  keywords:
    envs.VITE_SITE_KEYWORDS ||
    envs.SITE_KEYWORDS ||
    "神奇の赵贰,OrzMiku,个人主页,EcyPink,MikuShow",
  // 是否显示初音看板娘
  miku: ((): boolean => {
    if (envs.VITE_MIKU) {
      return envs.VITE_MIKU === "true";
    }
    if (envs.MIKU) {
      return envs.MIKU === "true";
    }
    return true;
  })(),
  // 友情链接
  links: () => {
    if (envs.VITE_SITE_LINKS) {
      return JSON.parse(envs.VITE_SITE_LINKS);
    }
    if (envs.SITE_LINKS) {
      return JSON.parse(envs.SITE_LINKS);
    }
    return [];
  },
  // 导航栏（path对应站内链接，url对应站外链接）
  navs: () => {
    if (envs.VITE_SITE_NAVS) {
      return JSON.parse(envs.VITE_SITE_NAVS);
    } else {
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
    }
  },
  foot: envs.VITE_SITE_FOOTER || "www.miku.show",
  icp: envs.VITE_SITE_ICP || "萌ICP备20233993号",

  /*
   * 个人资料配置
   */
  profile: {
    name: envs.VITE_PROFILE_NAME || "神奇の赵贰",
    slogan:
      envs.VITE_PROFILE_SLOGAN || "求知若渴，虚心若愚，读万卷书，行万里路",
    tags: (): Array<string> => {
      if (envs.VITE_PROFILE_TAGS) {
        return (envs.VITE_PROFILE_TAGS as string).split(",");
      } else {
        return ["宅", "二刺螈", "菜鸡", "00后", "剑网三", "双梦@糖心水蜜桃"];
      }
    },
    email: envs.VITE_PROFILE_EMAIL || "miku@ecy.pink",
  },
};

export default site;
