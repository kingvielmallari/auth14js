import { LoginButton } from '@/components/auth/signin-button';
import { Button } from '@/components/ui/button';


export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center ">
      <div className="space-y-7 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          💚PTC - DRMS💚
        </h1>
        <p className="text-white text-lg">
          Welcome To PTC Document Request Management System
        </p>
        <div>
          <LoginButton>
           <Button variant="secondary" size="lg">
            Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
   
  );
}
