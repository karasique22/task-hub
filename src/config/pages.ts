// export class Pages {
//   static BASE = '/dashboard';

//   static DASHBOARD = Pages.BASE;
//   static MESSAGES = `${Pages.BASE}/messages`;
//   static INSIGHT = `${Pages.BASE}/insight`;
//   static TEAM = `${Pages.BASE}/team`;
//   static SCHEDULE = `${Pages.BASE}/schedule`;
//   static REPORT = `${Pages.BASE}/report`;
//   static SETTINGS = `${Pages.BASE}/settings`;
// }

export const BASE = '/dashboard' as const;

export const Pages = {
  BASE,
  DASHBOARD: BASE,
  MESSAGES: `${BASE}/messages`,
  INSIGHT: `${BASE}/insight`,
  TEAM: `${BASE}/team`,
  SCHEDULE: `${BASE}/schedule`,
  REPORT: `${BASE}/report`,
  SETTINGS: `${BASE}/settings`,
} as const;

export type PagePath = (typeof Pages)[keyof typeof Pages];
