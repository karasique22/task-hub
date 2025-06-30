'use client';

import { Search } from 'lucide-react';
import { Input } from '../input/input';

interface Props {
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
}

export default function SearchField({
  placeholder = 'Найдите что-нибудь...',
  onChange,
  value,
}: Props) {
  return (
    <div className='flex items-center w-full max-w-sm px-4 py-2 bg-white dark:bg-neutral-800 rounded-full shadow-sm'>
      <Search
        size={28}
        strokeWidth={1.5}
        className='text-neutral-700 dark:text-neutral-300'
      />
      <Input
        className='shadow-none border-none text-base placeholder:text-base'
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        value={value}
      />
    </div>
  );
}
