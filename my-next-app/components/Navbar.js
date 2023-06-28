import React from 'react';
import Link from 'next/link';
import { useUser } from '../hooks/useUser';

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="bg-gray-800">
      <ul className="flex items-center justify-between px-4 py-2">
        <li>
          <Link href="/">
            <a className="text-white font-bold text-lg">Logo</a>
          </Link>
        </li>
        <li>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <a className="text-white hover:text-gray-300">Home</a>
              </Link>
            </li>
            {user && (
              <li>
                <Link href="/create-group">
                  <a className="text-white hover:text-gray-300">Create Group</a>
                </Link>
              </li>
            )}
            {user && (
              <li>
                <Link href="/invite-users">
                  <a className="text-white hover:text-gray-300">Invite Users</a>
                </Link>
              </li>
            )}
            {!user && (
              <li>
                <Link href="/login">
                  <a className="text-white hover:text-gray-300">Login</a>
                </Link>
              </li>
            )}
            {!user && (
              <li>
                <Link href="/register">
                  <a className="text-white hover:text-gray-300">Register</a>
                </Link>
              </li>
            )}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

