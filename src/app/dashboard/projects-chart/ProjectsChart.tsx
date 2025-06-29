'use client';

import * as React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { CHART_DATA } from '../data/projects-chart.data';
import { ProjectsChartTooltip } from './ProjectsChartTooltip';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
} from '@/components/ui/chart';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const chartConfig = {
  projects: {
    label: 'Проектов',
    color: '#2563eb',
  },
} satisfies ChartConfig;

export default function ProjectsChart() {
  const [timeRange, setTimeRange] = React.useState('90d');

  const filteredData = CHART_DATA.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date();
    let daysToSubtract = 365;
    if (timeRange === '180d') {
      daysToSubtract = 180;
    } else if (timeRange === '90d') {
      daysToSubtract = 90;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card>
      <CardHeader className='flex items-center gap-2 space-y-0 sm:flex-row'>
        <div className='grid text-center sm:text-left text-2xl font-semibold'>
          <CardTitle>Статистика проектов</CardTitle>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className='w-[160px] rounded-full sm:ml-auto'
            aria-label='Выберите интервал'
          >
            <SelectValue placeholder='Год' />
          </SelectTrigger>
          <SelectContent className='rounded-xl'>
            <SelectItem value='365d' className='rounded-lg'>
              Год
            </SelectItem>
            <SelectItem value='180d' className='rounded-lg'>
              Полгода
            </SelectItem>
            <SelectItem value='90d' className='rounded-lg'>
              3 месяца
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className='px-3 pt-4 sm:px-4 sm:pt-6 h-full'>
        <ChartContainer
          config={chartConfig}
          className='aspect-auto min-h-[200px] h-full w-full'
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id='fillProjects' x1='0' y1='0' x2='0' y2='1'>
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
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('ru-RU', {
                  month: 'short',
                });
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
                stroke: '#735dee',
                strokeWidth: 2,
                strokeDasharray: '5 8',
              }}
            />
            <Area
              className='stroke-2'
              dataKey='value'
              type='bump'
              fill='url(#fillProjects)'
              stroke='#735dee'
              stackId='a'
              activeDot={{ r: 6, fill: 'white', stroke: '#735dee' }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
