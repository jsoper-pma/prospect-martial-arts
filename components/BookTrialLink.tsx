"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEventHandler, ReactNode } from "react";

type BookTrialLinkProps = {
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

/** Homepage: scroll to #trial. Other pages: same-origin /#trial. */
export default function BookTrialLink({ className, children, onClick }: BookTrialLinkProps) {
  const pathname = usePathname();
  const href = pathname === "/" ? "#trial" : "/#trial";
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
