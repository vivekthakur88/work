import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const appointmentSchema = z.object({
  patientName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  date: z.string(),
  service: z.string().min(1, "Service is required"),
  notes: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = appointmentSchema.parse(body);

    const appointment = await prisma.appointment.create({
      data: {
        patientName: validatedData.patientName,
        email: validatedData.email,
        phone: validatedData.phone,
        date: new Date(validatedData.date),
        service: validatedData.service,
        notes: validatedData.notes,
      },
    });

    // Here you would typically also trigger an email confirmation 
    // using Resend, SendGrid, or Nodemailer.

    return NextResponse.json(
      { message: "Appointment booked successfully", appointment },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.issues }, { status: 400 });
    }
    console.error("Appointment Error:", error);
    return NextResponse.json(
      { error: "An error occurred while booking" },
      { status: 500 }
    );
  }
}
