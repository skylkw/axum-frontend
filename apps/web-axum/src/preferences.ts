import { defineOverridesPreferences } from '@vben/preferences';

/**
 * @description 项目配置文件
 * 只需要覆盖项目中的一部分配置，不需要的配置不用覆盖，会自动使用默认配置
 */
export const overridesPreferences = defineOverridesPreferences({
  // overrides
  app: {
    name: import.meta.env.VITE_APP_TITLE,
    enableRefreshToken: true,
  },
  footer: {
    enable: false,
  },
  sidebar: {
    width: 220,
  },
  theme: {
    builtinType: 'pink',
    colorPrimary: 'hsl(347 77% 60%)',
    mode: 'light',
    radius: '0.25',
    semiDarkSidebar: false,
  },
  widget: {
    globalSearch: false,
  },
});
