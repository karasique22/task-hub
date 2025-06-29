import { MAIN_MENU } from './data/main-menu.data';
import Link from 'next/link';

export default function SidebarMenu() {
  return (
    <nav>
      <ul className='space-y-3'>
        {MAIN_MENU.map((item) => (
          <li key={item.href}>
            <Link
              className='text-neutral-500 dark:text-white gap-2 pl-3 flex items-center justify-between'
              href={item.href}
            >
              <span className='flex gap-3 items-center'>
                <item.icon size={20} strokeWidth={1.5} />
                <span>{item.label}</span>
              </span>
              <span>
                {item.label === 'Сообщения' && (
                  <span className='text-primary bg-[#dcdef6] dark:text-neutral-800 rounded-xl px-2.5 text-xs font-medium'>
                    4
                  </span>
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
