type Props = {
	active?: boolean
	payload?: { value: number }[]
}

export const ProjectsChartTooltip = ({ active, payload }: Props) => {
	if (!active || !payload?.length) return null

	const value = payload[0].value as number

	return (
		<div
			style={{
				backgroundColor: '#735dee',
				color: 'white',
				padding: '6px 12px',
				borderRadius: 20,
				pointerEvents: 'none',
				fontSize: 14,
				whiteSpace: 'nowrap'
			}}
		>
			{`${value} проект${
				value % 10 === 1 && value !== 11
					? ''
					: value % 10 >= 2 && value % 10 <= 4 && (value < 12 || value > 14)
						? 'а'
						: 'ов'
			}`}
		</div>
	)
}
