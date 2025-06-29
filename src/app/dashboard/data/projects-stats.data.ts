import type { IProjectsStats } from '../projects-stats/projects-stats.types';

export const STATS_DATA: IProjectsStats[] = [
  {
    id: 1,
    number: 92,
    label: 'Активных проектов',
    bgColor: 'bg-violet-300',
    icon: 'images/icons/project-stats/active-projects.svg',
  },
  {
    id: 2,
    number: 35,
    label: 'Проектов в работе',
    bgColor: 'bg-yellow-300',
    icon: 'images/icons/project-stats/ongoing-projects.svg',
  },
  {
    id: 3,
    // minutes
    number: 1149,
    label: 'Рабочего времени',
    bgColor: 'bg-pink-300',
    icon: 'images/icons/project-stats/working-time.svg',
  },
];
