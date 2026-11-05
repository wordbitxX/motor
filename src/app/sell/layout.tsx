import type { Metadata } from 'next';
import type { ReactNode } from 'react';

/**
 * `/sell` is a client component, so it cannot export metadata itself.
 * This layout supplies a self-referencing canonical for the route.
 */
export const metadata: Metadata = {
  alternates: { canonical: '/sell' },
};

export default function SellLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
