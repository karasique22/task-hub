import { ChevronDown } from 'lucide-react';

interface Props {
  name: string;
  email: string;
}

export default function SidebarProfile({ name, email }: Props) {
  return (
    <div className='flex items-center justify-between bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded-full'>
      <div className='w-8 h-8 bg-primary rounded-full' />
      <div>
        <div className='font-medium'>{name}</div>
        <div className='opacity-60 text-xs'>{email}</div>
      </div>
      <div className='ml-1'>
        <ChevronDown size={16} className='opacity-70 ml-1' />
      </div>
    </div>
  );
}
