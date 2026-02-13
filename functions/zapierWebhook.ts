import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const payload = await req.json();

        // Entity automation stuurt: { event: { entity_id, ... }, data: {...} }
        const contactSubmissionId = payload.event?.entity_id || payload.contactSubmissionId;
        const submission = payload.data || null;

        if (!contactSubmissionId) {
            return Response.json({ error: 'contactSubmissionId is required' }, { status: 400 });
        }

        // Als we de data al hebben uit de automation, gebruik die, anders ophalen
        const contactSubmission = submission || await base44.asServiceRole.entities.ContactSubmission.get(contactSubmissionId);

        if (!contactSubmission) {
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
                naam: contactSubmission.naam,
                email: contactSubmission.email,
                organisatie: contactSubmission.organisatie,
                rol: contactSubmission.rol,
                onderwerp: contactSubmission.onderwerp,
                bericht: contactSubmission.bericht,
                telefoon: contactSubmission.telefoon,
                status: contactSubmission.status,
                created_date: contactSubmission.created_date,
                id: contactSubmission.id
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