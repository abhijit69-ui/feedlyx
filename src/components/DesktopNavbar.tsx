import { currentUser } from '@clerk/nextjs/server';
import { Button } from './ui/button';
import Link from 'next/link';
import { BellIcon, HomeIcon, UserIcon } from 'lucide-react';
import { SignInButton, UserButton } from '@clerk/nextjs';
import ThemeToggle from './ThemeToggle';
import { getUnreadNotificationCount } from '@/actions/notification.action';

export default async function DesktopNavbar() {
  const user = await currentUser();
  const unreadCount = user ? await getUnreadNotificationCount() : 0;
  return (
    <div className='hidden md:flex items-center space-x-4'>
      <ThemeToggle />

      <Button variant='ghost' className='flex items-center gap-2' asChild>
        <Link href='/'>
          <HomeIcon className='w-4 h-4' />
          <span className='hidden lg:inline'>Home</span>
        </Link>
      </Button>

      {user ? (
        <>
          <Button variant='ghost' className='flex items-center gap-2' asChild>
            <Link href='/notifications'>
              <div className='relative'>
                <BellIcon className='w-4 h-4' />

                {unreadCount > 0 && (
                  <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5'>
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </div>
              <span className='hidden lg:inline'>Notifications</span>
            </Link>
          </Button>
          <Button variant='ghost' className='flex items-center gap-2' asChild>
            <Link
              href={`/profile/${
                user.username ??
                user.emailAddresses[0].emailAddress.split('@')[0]
              }`}
            >
              <UserIcon className='w-4 h-4' />
              <span className='hidden lg:inline'>Profile</span>
            </Link>
          </Button>
          <UserButton />
        </>
      ) : (
        <SignInButton mode='modal'>
          <Button variant='default' className='cursor-pointer'>
            Sign In
          </Button>
        </SignInButton>
      )}
    </div>
  );
}
