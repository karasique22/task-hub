import type { IMenuItem } from '@/types/menu.types';
import { Pages } from '@/config/pages';
import {
  Settings,
  MessageCircleMore,
  ChartNoAxesColumn,
  UsersRound,
  CalendarDays,
  NotebookText,
  LayoutGrid,
} from 'lucide-react';

export const MAIN_MENU: IMenuItem[] = [
  {
    icon: LayoutGrid,
    label: 'Панель задач',
    href: Pages.DASHBOARD,
  },
  {
    icon: MessageCircleMore,
    label: 'Сообщения',
    href: Pages.MESSAGES,
  },
  {
    icon: ChartNoAxesColumn,
    label: 'Аналитика',
    href: Pages.INSIGHT,
  },
  {
    icon: UsersRound,
    label: 'Команда',
    href: Pages.TEAM,
  },
  {
    icon: CalendarDays,
    label: 'Расписание',
    href: Pages.SCHEDULE,
  },
  {
    icon: NotebookText,
    label: 'Отчёт',
    href: Pages.REPORT,
  },
  {
    icon: Settings,
    label: 'Настройки',
    href: Pages.SETTINGS,
  },
];
