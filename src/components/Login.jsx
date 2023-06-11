import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { Button } from '@mui/material';
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
        <span className="font-semibold text-lg">DB-Final</span>
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
