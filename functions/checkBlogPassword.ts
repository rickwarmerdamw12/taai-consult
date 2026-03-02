import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const { password } = await req.json();
    const correct = Deno.env.get("BLOG_BEHEER_PASSWORD");

    if (password === correct) {
      return Response.json({ ok: true });
    } else {
      return Response.json({ ok: false }, { status: 401 });
    }
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});