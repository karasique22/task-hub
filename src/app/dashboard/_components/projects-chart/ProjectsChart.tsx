'use client'

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from '@/components/ui/card/card'
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip
} from '@/components/ui/chart/chart'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select/select'
import * as React from 'react'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import { CHART_DATA } from '../../../../data/projects-chart.data'
import { ProjectsChartTooltip } from './ProjectsChartTooltip'

const chartConfig = {
	projects: {
		label: 'Проектов',
		color: '#2563eb'
	}
} satisfies ChartConfig

export default function ProjectsChart() {
	const [timeRange, setTimeRange] = React.useState('90d')

	const filteredData = (() => {
		const monthsCount = timeRange === '365d' ? 12 : timeRange === '180d' ? 6 : 3
		const lastMonths = Array.from(
			new Set(
				CHART_DATA.map(item => {
					const date = new Date(item.date)
					return `${date.getFullYear()}-${date.getMonth()}`
				})
			)
		)
			.sort((a, b) => {
				const [aYear, aMonth] = a.split('-').map(Number)
				const [bYear, bMonth] = b.split('-').map(Number)
				return aYear !== bYear ? aYear - bYear : aMonth - bMonth
			})
			.slice(-monthsCount)

		return CHART_DATA.filter(item => {
			const date = new Date(item.date)
			const key = `${date.getFullYear()}-${date.getMonth()}`
			return lastMonths.includes(key)
		})
	})()

	return (
		<Card>
			<CardHeader className='flex items-center gap-2 space-y-0 sm:flex-row'>
				<div className='grid text-center text-2xl font-semibold sm:text-left'>
					<CardTitle>Статистика проектов</CardTitle>
				</div>
				<Select
					value={timeRange}
					onValueChange={setTimeRange}
				>
					<SelectTrigger
						className='border-muted-foreground/30 w-[160px] rounded-full border-2 sm:ml-auto'
						aria-label='Выберите интервал'
					>
						<SelectValue placeholder='Год' />
					</SelectTrigger>
					<SelectContent className='bg-card rounded-xl opacity-100'>
						<SelectItem
							value='365d'
							className='rounded-lg'
						>
							Год
						</SelectItem>
						<SelectItem
							value='180d'
							className='rounded-lg'
						>
							Полгода
						</SelectItem>
						<SelectItem
							value='90d'
							className='rounded-lg'
						>
							3 месяца
						</SelectItem>
					</SelectContent>
				</Select>
			</CardHeader>
			<CardContent className='h-full px-3 pt-4 sm:px-4 sm:pt-6'>
				<ChartContainer
					config={chartConfig}
					className='aspect-auto h-full min-h-[200px] w-full'
				>
					<AreaChart data={filteredData}>
						<defs>
							<linearGradient
								id='fillProjects'
								x1='0'
								y1='0'
								x2='0'
								y2='1'
							>
								<stop
									offset='5%'
									stopColor='var(--color-primary)'
									stopOpacity={0.5}
								/>
								<stop
									offset='95%'
									stopColor='var(--color-primary)'
									stopOpacity={0}
								/>
							</linearGradient>
						</defs>
						<CartesianGrid vertical={false} />
						<XAxis
							className='text-sm'
							dataKey='date'
							tickLine={false}
							axisLine={false}
							tickMargin={15}
							minTickGap={15}
							tickFormatter={value => {
								const date = new Date(value)
								return date.toLocaleDateString('ru-RU', {
									month: 'short'
								})
							}}
						/>
						<YAxis
							className='text-base'
							dataKey='value'
							tickLine={false}
							axisLine={false}
							tickMargin={30}
						/>
						<ChartTooltip
							content={<ProjectsChartTooltip />}
							cursor={{
								stroke: 'var(--color-primary)',
								strokeWidth: 2,
								strokeDasharray: '5 8'
							}}
						/>
						<Area
							className='stroke-2'
							dataKey='value'
							type='bump'
							fill='url(#fillProjects)'
							stroke='var(--color-primary)'
							stackId='a'
							activeDot={{
								r: 6,
								fill: 'white',
								stroke: 'var(--color-primary)'
							}}
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
