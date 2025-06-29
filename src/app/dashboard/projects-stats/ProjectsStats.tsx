import ProjectStatsCard from './ProjectStatsCard';
import { STATS_DATA } from '../data/projects-stats.data';

export default function ProjectsStats() {
  return (
    <div className='flex flex-col gap-4'>
      {STATS_DATA.map((projectStat) => (
        <ProjectStatsCard key={projectStat.id} projectStat={projectStat} />
      ))}
    </div>
  );
}
