import Link from "next/link";
import { LayoutDashboard, Calendar, Users, FileText, Settings, LogOut, MessageSquare } from "lucide-react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Appointments", href: "/dashboard/appointments", icon: Calendar },
    { name: "Inquiries", href: "/dashboard/inquiries", icon: MessageSquare },
    { name: "Patients", href: "/dashboard/patients", icon: Users },
    { name: "Blog Posts", href: "/dashboard/blog", icon: FileText },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white fixed h-full flex flex-col z-10">
        <div className="h-20 flex items-center px-8 border-b border-slate-800">
          <span className="text-2xl font-bold tracking-tight">Dentkraft<span className="text-blue-500">.</span></span>
        </div>
        <div className="px-4 py-8 flex-1 overflow-y-auto">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-4 py-3 text-slate-300 hover:bg-blue-600 hover:text-white rounded-xl transition-all font-medium"
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center px-4 py-3 text-slate-400 hover:text-white cursor-pointer rounded-xl transition-all font-medium mb-2">
            <LogOut className="w-5 h-5 mr-3" />
            <span onClick={() => {
              // Client-side signout is handled differently, usually with a button component
              // For simplicity in this layout, we just provide the visual
            }}>Logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800">Admin Portal</h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-slate-600">Welcome, Admin</span>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
              A
            </div>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}
