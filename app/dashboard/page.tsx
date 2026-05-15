import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, FileText, TrendingUp, Clock, CheckCircle } from "lucide-react";

export default async function DashboardPage() {
  const stats = [
    { title: "Total Appointments", value: await prisma.appointment.count(), icon: Calendar, color: "text-blue-500", bg: "bg-blue-100" },
    { title: "Pending Requests", value: await prisma.appointment.count({ where: { status: "PENDING" } }), icon: Clock, color: "text-amber-500", bg: "bg-amber-100" },
    { title: "Confirmed Appointments", value: await prisma.appointment.count({ where: { status: "CONFIRMED" } }), icon: CheckCircle, color: "text-green-500", bg: "bg-green-100" },
    { title: "Total Patients", value: "1,248", icon: Users, color: "text-purple-500", bg: "bg-purple-100" },
    { title: "New Inquiries", value: await prisma.contactInquiry.count({ where: { status: "NEW" } }), icon: FileText, color: "text-pink-500", bg: "bg-pink-100" },
    { title: "Revenue (MTD)", value: "$45,230", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-100" },
  ];

  const recentAppointments = await prisma.appointment.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-slate-100 shadow-sm rounded-2xl overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2 bg-slate-50/50">
              <CardTitle className="text-sm font-medium text-slate-600">{stat.title}</CardTitle>
              <div className={`${stat.bg} ${stat.color} p-2 rounded-xl`}>
                <stat.icon className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 className="text-lg font-bold text-slate-900">Recent Appointment Requests</h3>
        </div>
        <div className="p-0">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-sm text-slate-500">
                <th className="p-4 font-medium">Patient Name</th>
                <th className="p-4 font-medium">Service</th>
                <th className="p-4 font-medium">Date Requested</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentAppointments.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500">No recent appointments found.</td>
                </tr>
              ) : (
                recentAppointments.map((apt) => (
                  <tr key={apt.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-medium text-slate-900">{apt.patientName}</td>
                    <td className="p-4 text-slate-600">{apt.service}</td>
                    <td className="p-4 text-slate-600">{new Date(apt.date).toLocaleDateString()}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                        ${apt.status === 'PENDING' ? 'bg-amber-100 text-amber-700' : ''}
                        ${apt.status === 'CONFIRMED' ? 'bg-green-100 text-green-700' : ''}
                        ${apt.status === 'COMPLETED' ? 'bg-blue-100 text-blue-700' : ''}
                        ${apt.status === 'CANCELLED' ? 'bg-red-100 text-red-700' : ''}
                      `}>
                        {apt.status}
                      </span>
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
