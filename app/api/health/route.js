export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({
    ok: true,
    service: "oru-studio",
    timestamp: new Date().toISOString(),
    uptime: Math.round(process.uptime()),
  });
}
