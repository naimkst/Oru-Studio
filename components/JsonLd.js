const serializeJsonLd = (data) => JSON.stringify(data).replace(/</g, "\\u003c");

export default function JsonLd({ data }) {
  const items = Array.isArray(data) ? data : [data];

  return items.filter(Boolean).map((item, index) => (
    <script
      key={`json-ld-${index}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(item) }}
    />
  ));
}
