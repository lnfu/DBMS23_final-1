import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';
export default function Login(props) {
  const { data: session } = useSession();

  if (!session)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Button variant="outlined" className="w-1/2 text-4xl py-10" onClick={() => signIn()}>
          Sign In
        </Button>
      </div>
    );
  return (
    <header className="bg-white text-gray-800 px-4 py-3 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <Link href="http://localhost:3000">
          <span className="font-semibold text-lg mr-10">Home</span>
        </Link>

        <Link href="http://localhost:3000/follows-page">
          <span className="text-lg text-blue-500 mr-10">Follows Page</span>
        </Link>
        <Link href="http://localhost:3000/my-follows">
          <span className="text-lg text-blue-500 mr-10">All My Follows</span>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Image
          src={session.user.image}
          alt="Profile"
          width="32"
          height="32"
          className="rounded-full"
        />
        <span className=" font-semibold tracking-wide">{session.user.name}</span>

        <Button variant="outlined" onClick={() => signOut()}>
          Sign out
        </Button>
      </div>
    </header>
  );
}
