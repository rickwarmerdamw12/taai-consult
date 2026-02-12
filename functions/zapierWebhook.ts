import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const { contactSubmissionId } = await req.json();

        if (!contactSubmissionId) {
            return Response.json({ error: 'contactSubmissionId is required' }, { status: 400 });
        }

        // Haal de contactsubmissie op
        const submission = await base44.asServiceRole.entities.ContactSubmission.get(contactSubmissionId);

        if (!submission) {
            return Response.json({ error: 'Contact submission not found' }, { status: 404 });
        }

        // Haal Zapier webhook URL uit secrets
        const zapierWebhookUrl = Deno.env.get("ZAPIER_WEBHOOK_URL");

        if (!zapierWebhookUrl) {
            return Response.json({ error: 'Zapier webhook URL not configured' }, { status: 500 });
        }

        // Stuur data naar Zapier
        const zapierResponse = await fetch(zapierWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                naam: submission.naam,
                email: submission.email,
                organisatie: submission.organisatie,
                rol: submission.rol,
                onderwerp: submission.onderwerp,
                bericht: submission.bericht,
                telefoon: submission.telefoon,
                status: submission.status,
                created_date: submission.created_date,
                id: submission.id
            })
        });

        if (!zapierResponse.ok) {
            return Response.json({ 
                error: 'Failed to send to Zapier',
                status: zapierResponse.status 
            }, { status: 500 });
        }

        return Response.json({ 
            success: true,
            message: 'Contact submission sent to Zapier'
        });

    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});