export function getProgressBarColor(progress: number): string {
	if (progress >= 100) return 'bg-emerald-500'
	if (progress >= 80) return 'bg-yellow-400'
	return 'bg-primary'
}
