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

        await base44.asServiceRole.integrations.Core.SendEmail({
            to: 'rick@taai-consult.nl',
            subject: `Nieuw contactformulier van ${contactSubmission.naam} (${contactSubmission.organisatie})`,
            body: `Je hebt een nieuw bericht ontvangen via het contactformulier op taai-consult.nl.\n\nNaam: ${contactSubmission.naam}\nE-mail: ${contactSubmission.email}\nTelefoon: ${contactSubmission.telefoon || '-'}\nOrganisatie: ${contactSubmission.organisatie}\nRol: ${contactSubmission.rol}\nOnderwerp: ${contactSubmission.onderwerp}\n\nBericht:\n${contactSubmission.bericht}`
        });

        return Response.json({ success: true });

    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});