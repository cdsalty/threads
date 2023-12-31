// this is coming from the auth group route
import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Auth',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* <body className={`${inter.className} bg-dark-1`}>{children}</body> */}
        <body className={`${inter.className}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

/*
- In most cases, layouts will have children because we need to display something within it.
- {children: React.ReactNode} is the required type definition for the children prop. It's a React node, which means it can be anything that can be rendered by React.
- by returning the <ClerkProvider> component, we're making sure that all of the children components have access to the Clerk context and the clerk's functionalities.
*/
