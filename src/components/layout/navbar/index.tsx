import React from 'react';
import Link from 'next/link';
import routes from '@/config/routes';
import { capitalCase } from 'change-case';
import { Button } from '@/components/ui/button';

interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = () => {
  const { contact, about, help, templates } = routes;
  //    <div className="space-y-6 m-6 p-8 bg-white rounded-2xl dark:bg-white text-gray-700 dark:text-gray-300">

  return (
    <div className="flex items-center m-6 mt-18 p-4 bg-white rounded-3xl justify-between md:justify-start">
      <div className="p-2 mr-2">
        <Link href="/" className="text-2xl font-semibold text-gray-900 ">
          Exposure
        </Link>
      </div>
      <div className="flex-1 hidden md:flex gao-x-2">
        {Object.entries({ contact, about, help, templates }).map(([key, value]) => (
          <Link key={key} href={value} className="text-gray-800  hover:text-gray-900 dark:hover:text-white mx-2">
            {capitalCase(key)}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-x-2">
        <Button asChild className="p-5 text-md bg-gray-300 text-gray-800">
          <Link href={routes.login} className="">
            Login
          </Link>
        </Button>
        <Button asChild variant="secondary" className="rounded-3xl text-md p-5">
          <Link href={routes.register} className="text-gray-800">
            Sign up Free
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
