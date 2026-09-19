import { redirect } from "next/navigation";

/** Legacy path — public brand is Mathnetica Platform. */
export default function QBridgeRedirectPage() {
  redirect("/platform");
}
