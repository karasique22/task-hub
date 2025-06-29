import { PROJECTS } from './data/projects.data';
import cn from 'clsx';

export default function SidebarProjects() {
  return (
    <div>
      <ul className='space-y-3'>
        {PROJECTS.map((project) => (
          <li key={project.id} className='flex items-center gap-4 pl-3'>
            <div className={cn(project.color, 'w-3 h-3')} />
            <span className='text-neutral-500 dark:text-white'>
              {project.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
