import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const payload = await req.json();

        const contactSubmissionId = payload.entity_id || payload.event?.entity_id;

        if (!contactSubmissionId) {
            return Response.json({ error: 'contactSubmissionId is required' }, { status: 400 });
        }

        const contactSubmission = await base44.asServiceRole.entities.ContactSubmission.get(contactSubmissionId);

        if (!contactSubmission) {
            return Response.json({ error: 'Contact submission not found' }, { status: 404 });
        }

        const resendApiKey = Deno.env.get('RESEND_API_KEY');

        const emailBody = `
Naam: ${contactSubmission.naam}
E-mail: ${contactSubmission.email}
Telefoon: ${contactSubmission.telefoon || '-'}
Organisatie: ${contactSubmission.organisatie}
Rol: ${contactSubmission.rol}
Onderwerp: ${contactSubmission.onderwerp}

Bericht:
${contactSubmission.bericht}
        `.trim();

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Taai-Consult <noreply@taai-consult.nl>',
                to: ['rick@taai-consult.nl'],
                subject: `Nieuw contactformulier van ${contactSubmission.naam} (${contactSubmission.organisatie})`,
                text: emailBody,
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            return Response.json({ error: error.message }, { status: 500 });
        }

        return Response.json({ success: true });

    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});