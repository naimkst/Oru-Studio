import { permanentRedirect } from "next/navigation";

export default function ResourcesRedirectPage() {
  permanentRedirect("/blog");
}
