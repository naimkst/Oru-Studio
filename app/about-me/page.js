import { permanentRedirect } from "next/navigation";

export default function AboutMeRedirectPage() {
  permanentRedirect("/about");
}
