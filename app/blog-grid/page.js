import { permanentRedirect } from "next/navigation";

export default function BlogGridRedirectPage() {
  permanentRedirect("/blog");
}
