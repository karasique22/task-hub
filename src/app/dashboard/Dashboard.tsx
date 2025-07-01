'use client'

import Heading from '@/components/ui/heading/Heading'
import SearchField from '@/components/ui/search-field/SearchField'

import LastTasks from './_components/last-tasks/LastTasks'
import ProjectsChart from './_components/projects-chart/ProjectsChart'
import ProjectsStats from './_components/projects-stats/ProjectsStats'

export default function Dashboard() {
	return (
		<div className='grid grid-cols-[2.7fr_1fr]'>
			<div>
				<div className='p-4'>
					<div className='mb-7 flex items-center justify-between'>
						<Heading>Панель задач</Heading>
						<SearchField
							value=''
							onChange={value => {}}
						/>
					</div>

					<div className='grid grid-cols-[25%_75%] space-x-4'>
						<ProjectsStats />
						<ProjectsChart />
					</div>
				</div>

				<LastTasks />
			</div>

			<div className='bg-background flex h-screen items-center justify-center p-5'>
				chat
			</div>
		</div>
	)
}
