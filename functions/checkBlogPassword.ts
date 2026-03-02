import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const { password } = await req.json();
    const correct = Deno.env.get("BLOG_BEHEER_PASSWORD");

    return Response.json({ ok: password === correct });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});