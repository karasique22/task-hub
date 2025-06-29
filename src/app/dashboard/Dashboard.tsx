'use client';

import SearchField from '@/components/ui/search-field/SearchField';
import Heading from '@/components/ui/Heading';
import ProjectsStats from './projects-stats/ProjectsStats';
import ProjectsChart from './projects-chart/ProjectsChart';

export default function Dashboard() {
  return (
    <div className='grid grid-cols-[2.7fr_1fr]'>
      <div className='p-4'>
        <div className='flex items-center justify-between mb-7'>
          <Heading>Панель задач</Heading>
          <SearchField value='' onChange={(value) => {}} />
        </div>

        <div className='grid grid-cols-[25%_75%] space-x-4'>
          <ProjectsStats />
          <ProjectsChart />
        </div>
      </div>
      <div className='p-5 bg-violet-300 h-screen flex items-center justify-center'>
        chat
      </div>
    </div>
  );
}
