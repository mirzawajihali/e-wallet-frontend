import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function DemoAccounts() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  const roles = [
    {
      id: "admin",
      label: "Admin",
      email: "main@gmail.com",
      password: "mainadmin123",
      color: "red",
      icon: "🛡️",
    },
    {
      id: "agent",
      label: "Agent",
      email: "agent@gmail.com",
      password: "Agent123!",
      color: "blue",
      icon: "🏪",
    },
    {
      id: "user",
      label: "User",
      email: "user@gmail.com",
      password: "User123!",
      color: "green",
      icon: "👤",
    },
  ];

  return (
    <div className="mt-6 p-4 bg-background/80 backdrop-blur-sm rounded-xl border border-primary/20 shadow-md max-w-sm mx-auto text-sm">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 bg-primary/20 rounded-md flex items-center justify-center">
          <span className="text-primary text-xs">🎮</span>
        </div>
        <h3 className="text-sm font-semibold text-primary">Demo Accounts</h3>
      </div>

      <p className="text-xs text-muted-foreground mb-3">
        Use these credentials to test roles:
      </p>

      <div className="space-y-2">
        {roles.map((role) => (
          <div
            key={role.id}
            className={`p-2 bg-${role.color}-50/70 dark:bg-${role.color}-950/30 rounded-lg border border-${role.color}-200/40`}
          >
            {/* Role Label */}
            <div className="flex items-center gap-1 mb-1">
              <span className={`text-${role.color}-600 text-sm`}>
                {role.icon}
              </span>
              <span
                className={`font-medium text-${role.color}-600 dark:text-${role.color}-400 text-xs`}
              >
                {role.label}
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between bg-white/50 dark:bg-black/20 rounded-md px-2 py-1 mb-1">
              <span className={`text-${role.color}-600 text-xs`}>
                {role.email}
              </span>
              <button
                onClick={() => handleCopy(role.email, role.id + "-email")}
                className={`p-1 hover:bg-${role.color}-100 dark:hover:bg-${role.color}-900/30 rounded transition-colors`}
                title="Copy email"
              >
                {copied === role.id + "-email" ? (
                  <Check className="w-3 h-3 text-green-500" />
                ) : (
                  <Copy className={`w-3 h-3 text-${role.color}-500`} />
                )}
              </button>
            </div>

            {/* Password */}
            <div className="flex items-center justify-between bg-white/50 dark:bg-black/20 rounded-md px-2 py-1">
              <span className={`text-${role.color}-600 text-xs`}>
                {role.password}
              </span>
              <button
                onClick={() => handleCopy(role.password, role.id + "-password")}
                className={`p-1 hover:bg-${role.color}-100 dark:hover:bg-${role.color}-900/30 rounded transition-colors`}
                title="Copy password"
              >
                {copied === role.id + "-password" ? (
                  <Check className="w-3 h-3 text-green-500" />
                ) : (
                  <Copy className={`w-3 h-3 text-${role.color}-500`} />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-2 border-t border-primary/10">
        <p className="text-[10px] text-muted-foreground text-center">
          💡 Or sign up with the form on the right →
        </p>
      </div>
    </div>
  );
}
