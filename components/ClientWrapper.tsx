import { ReactNode } from "react";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export default function ClientWrapper({
  children,
}: {
  children: (props: any) => ReactNode;
}) {
  return <>{children({})}</>;
}
