import type { RouterConfig } from "@nuxt/schema";

export default {
  routes: (routes) => [
    {
      path: "/wettkampf",
      redirect: "/wettkampf/regeln",
    },
    ...routes,
  ],
} satisfies RouterConfig;
