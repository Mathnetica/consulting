import { redirect } from "next/navigation";

/** Legacy product path — public brand is Mathnetica Platform. */
export default function QuancaveRedirectPage() {
  redirect("/platform");
}
