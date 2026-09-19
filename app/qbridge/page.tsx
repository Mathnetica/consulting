import { redirect } from "next/navigation";

/** Legacy path — product renamed to Quancave. */
export default function QBridgeRedirectPage() {
  redirect("/quancave");
}
