"use client";

import React, { useEffect, type ReactNode } from "react";
import reportAccessibility from "@/utils/reportAccessibility";
import { usePathname } from "next/navigation";

export const AccessibilityProvider = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const shouldRun = typeof window !== "undefined" && process.env.NODE_ENV !== "production";
  const pathname = usePathname();

  useEffect(() => {
    if (shouldRun) {
      reportAccessibility(React);
    }
  }, [pathname, shouldRun]);

  return <>{children}</>;
};

export default AccessibilityProvider;
