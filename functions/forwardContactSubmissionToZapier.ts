import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const payload = await req.json();

        // LOG: Volledige payload voor debugging
        console.log('=== FUNCTION TRIGGERED ===');
        console.log('Full payload:', JSON.stringify(payload, null, 2));

        // Bepaal entity_id - meestal is het direct in payload.entity_id
        const contactSubmissionId = payload.entity_id || payload.event?.entity_id;

        console.log('Extracted contactSubmissionId:', contactSubmissionId);

        if (!contactSubmissionId) {
            console.error('ERROR: No contactSubmissionId found in payload');
            return Response.json({ 
                error: 'contactSubmissionId is required',
                receivedPayload: payload
            }, { status: 400 });
        }

        // Haal de volledige ContactSubmission op
        console.log('Fetching ContactSubmission from database...');
        const contactSubmission = await base44.asServiceRole.entities.ContactSubmission.get(contactSubmissionId);

        if (!contactSubmission) {
            console.error('ERROR: ContactSubmission not found in database');
            return Response.json({ error: 'Contact submission not found' }, { status: 404 });
        }

        console.log('ContactSubmission found:', contactSubmission.id);

        // Zapier webhook URL (direct in code voor nu)
        const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/26394284/uexmsv4/';

        // Stuur data naar Zapier (platte structuur)
        console.log('Sending to Zapier:', zapierWebhookUrl);
        const zapierResponse = await fetch(zapierWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                naam: contactSubmission.naam,
                email: contactSubmission.email,
                telefoon: contactSubmission.telefoon || '',
                organisatie: contactSubmission.organisatie,
                rol: contactSubmission.rol,
                onderwerp: contactSubmission.onderwerp,
                bericht: contactSubmission.bericht,
                status: contactSubmission.status,
                created_date: contactSubmission.created_date,
                id: contactSubmission.id
            })
        });

        const responseText = await zapierResponse.text();
        console.log('Zapier response status:', zapierResponse.status);
        console.log('Zapier response body:', responseText);

        if (!zapierResponse.ok) {
            console.error('ERROR: Zapier webhook failed');
            return Response.json({ 
                error: 'Failed to send to Zapier',
                zapierStatus: zapierResponse.status,
                zapierResponse: responseText
            }, { status: 500 });
        }

        console.log('SUCCESS: Contact submission sent to Zapier');
        return Response.json({ 
            success: true,
            message: 'Contact submission sent to Zapier',
            contactSubmissionId: contactSubmission.id
        });

    } catch (error) {
        console.error('ERROR: Exception caught:', error.message);
        console.error('Stack:', error.stack);
        return Response.json({ error: error.message }, { status: 500 });
    }
});