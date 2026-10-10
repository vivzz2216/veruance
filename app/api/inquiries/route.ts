async function getEnv(): Promise<Record<string, any>> {
  try {
    // Dynamic import to allow portable builds (e.g. Next.js on Vercel) where cloudflare:workers is absent
    const cf = await import(/* webpackIgnore: true */ "cloudflare:workers");
    return cf.env || {};
  } catch {
    return (process.env as Record<string, any>) || {};
  }
}

export async function POST(request: Request) {
  const env = await getEnv();
  if (!env.DB) {
    return Response.json(
      { error: "Online inquiries are unavailable. Please email pillaivivek16@gmail.com." },
      { status: 503 }
    );
  }
  if (request.headers.get("origin") && request.headers.get("origin") !== new URL(request.url).origin) {
    return Response.json({ error: "Please submit from this website." }, { status: 403 });
  }
  try {
    const data = (await request.json()) as Record<string, unknown>;
    if (data.website) return Response.json({ ok: true });
    const values = ["name", "email", "projectType", "budget", "message"].map((key) =>
      typeof data[key] === "string" ? (data[key] as string).trim() : ""
    );
    const [name, email, projectType, budget, message] = values;
    if (
      !name ||
      name.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      !projectType ||
      projectType.length > 100 ||
      !budget ||
      budget.length > 100 ||
      message.length < 10 ||
      message.length > 5000
    ) {
      return Response.json(
        { error: "Please check your details and write at least 10 characters about your project." },
        { status: 400 }
      );
    }
    await env.DB.prepare(
      "INSERT INTO inquiries (id, name, email, project_type, budget, message, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)"
    )
      .bind(crypto.randomUUID(), ...values, new Date().toISOString())
      .run();
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Inquiry could not be saved", error);
    return Response.json(
      { error: "Your request couldn't be saved. Your details are still here; please try again." },
      { status: 503 }
    );
  }
}
