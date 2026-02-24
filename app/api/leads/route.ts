import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Check if credentials are set
        if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
            console.log('Lead received (Simulation mode - No Supabase keys):', data);
            return NextResponse.json({
                message: 'Lead received successfully (Simulation Mode)',
                success: true
            });
        }

        console.log('Dados recebidos na API:', data);

        const result = await supabase
            .from('Leads')
            .insert([
                {
                    name: data.name,
                    email: data.email,
                    whatsapp: data.whatsapp,
                    company: data.company,
                    segment: data.segment,
                    message: data.message
                },
            ])
            .select();

        console.log('Resultado do Supabase:', result);

        const { error, data: insertedData } = result;

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({
            message: 'Lead saved successfully',
            success: true
        });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
