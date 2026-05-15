import { prisma } from "@/lib/prisma";
import { format } from "date-fns";

export default async function AppointmentsPage() {
  const appointments = await prisma.appointment.findMany({
    orderBy: { date: "asc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Appointments List</h1>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-sm text-slate-600 font-medium uppercase tracking-wider">
                <th className="p-4">Date & Time</th>
                <th className="p-4">Patient Name</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Service</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {appointments.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-500">No appointments found.</td>
                </tr>
              ) : (
                appointments.map((apt) => (
                  <tr key={apt.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 text-slate-900 font-medium">
                      {format(new Date(apt.date), "MMM d, yyyy")}
                    </td>
                    <td className="p-4 text-slate-800 font-medium">{apt.patientName}</td>
                    <td className="p-4 text-slate-600 text-sm">
                      <div className="truncate w-32 md:w-auto">{apt.email}</div>
                      <div>{apt.phone}</div>
                    </td>
                    <td className="p-4 text-slate-600">{apt.service}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${apt.status === 'PENDING' ? 'bg-amber-100 text-amber-800' : ''}
                        ${apt.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' : ''}
                        ${apt.status === 'COMPLETED' ? 'bg-blue-100 text-blue-800' : ''}
                        ${apt.status === 'CANCELLED' ? 'bg-red-100 text-red-800' : ''}
                      `}>
                        {apt.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">Edit</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
