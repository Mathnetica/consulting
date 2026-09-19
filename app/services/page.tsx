import { redirect } from "next/navigation";

/** Services tab retired — public product is Mathnetica Platform. */
export default function ServicesPage() {
  redirect("/platform");
}
