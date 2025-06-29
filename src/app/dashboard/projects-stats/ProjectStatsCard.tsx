import { cn } from '@/lib/utils';
import type { IProjectsStats } from './projects-stats.types';
import { formatMinutes } from '@/utils/format-minutes';
import Image from 'next/image';

interface Props {
  projectStat: IProjectsStats;
}

export default function ProjectsStatsCard({ projectStat }: Props) {
  return (
    <div
      className={cn(
        projectStat.bgColor,
        'flex justify-between p-5 rounded-2xl items-center'
      )}
    >
      <div className='flex flex-col'>
        <span className='font-semibold text-4xl'>
          {projectStat.label === 'Рабочего времени'
            ? formatMinutes(projectStat.number)
            : projectStat.number}
        </span>
        <span className='text-sm font-medium'>{projectStat.label}</span>
      </div>

      <div className='shrink-0'>
        <Image
          src={projectStat.icon}
          alt={projectStat.label}
          width={85}
          height={85}
        />
      </div>
    </div>
  );
}
