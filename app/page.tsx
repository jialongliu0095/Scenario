import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const apiUrl = process.env.NEXT_TESTNEXT_TEST;

export default function Page() {
  return (
    <div className="p-4 space-y-6 bg-gray-100 dark:bg-gray-900">
      <div className="flex justify-center">
        <Image
          className="rounded-lg shadow-lg"
          src="/picture for house.png"
          alt="House"
          width={300}
          height={200}
          priority
        />
      </div>

      <span className="block text-center border-2 border-dashed bg-gradient-to-r from-indigo-600 to-pink-500 px-4 py-2 text-white font-semibold rounded-md shadow">
        Welcome to our website. We are here to serve you.
      </span>

      <p className="text-xl font-bold text-center text-gray-800 dark:text-white">
        Creating an Intelligent Management Platform for Strata-Titled Apartments
      </p>

      <article className="border-2 p-6 prose prose-slate dark:prose-invert rounded-md bg-white shadow-md dark:bg-gray-800">
        <h2>Why We Created This Website</h2>
        <p>
          In New South Wales, strata-titled apartment buildings are governed by the
          <strong> Strata Schemes Management Act (2015)</strong>.
        </p>
        <p>
          Each building is subdivided into units, or lots, which collectively form the
          <strong> Owners Corporation</strong> (also known as the body corporate).
        </p>
        <p>
          The Owners Corporation is responsible for tasks such as maintenance of common areas and building insurance.
        </p>
      </article>

      <section className="border-2 p-6 rounded-md bg-gray-50 dark:bg-gray-800 dark:text-white">
        <h2 className="text-2xl font-semibold mb-4">The Aim of the Website</h2>
        <p>
          This website acts as a communication bridge between the Owners Corporation and lot owners.
          It supports the following core functionalities:
        </p>
      </section>

      <section className="border-4 p-6 prose prose-slate dark:prose-invert rounded-md bg-white shadow-md">
        <h2>Website Objectives</h2>
        <ul className="list-disc pl-6">
          <li>Owner Information Management</li>
          <li>Registration and Login System</li>
          <li>Unit/Ownership Share Information Viewing</li>
          <li>Contact Information Updates</li>
          <li>Transparent Financial Management</li>
          <li>Proposal Discussion and Voting System</li>
          <li>Meeting Scheduling and Voting Platform</li>
          <li>Publishing Notices for Meetings</li>
          <li>Publishing Meeting Minutes</li>
        </ul>
      </section>

      <section className="border-4 p-6 prose prose-slate dark:prose-invert rounded-md bg-white shadow-md">
        <h2>Website Features</h2>
        <p>
          Easily find committee members and contact them for assistance or updates.
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <Link href="/app/commit" className="text-blue-600 underline">
              Chairman of the committee
            </Link>
          </li>
          <li>
            <Link href="/app/secretary" className="text-blue-600 underline">
              Secretary of the committee
            </Link>
          </li>
          <li>
            <Link href="/app/treasurer" className="text-blue-600 underline">
              Treasurer of the committee
            </Link>
          </li>
          <li>
            <Link href="/app/security" className="text-blue-600 underline">
              Head of Security
            </Link>
          </li>
          <li>
            <Link href="/app/maintain" className="text-blue-600 underline">
              Maintenance Supervisor
            </Link>
          </li>
        </ol>
      </section>

      <section className="mt-8 border-t pt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>The API address of the current connection is:</p>
        <p className="font-mono text-blue-600">{apiUrl}</p>
      </section>

      <footer className="mt-10 border-t pt-4 text-sm text-gray-600 dark:text-gray-400">
        <p>Date: 29/4/2025</p>
        <p>Contact us:</p>
        <ul className="list-disc pl-6">
          <li>Email: 5201314@jack</li>
          <li>Phone: 5201314</li>
          <li>Address: NSW, Australia</li>
          <li>
            Website: <a href="/app" className="text-blue-600 underline">Visit us</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}