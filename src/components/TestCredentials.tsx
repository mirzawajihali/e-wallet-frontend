import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CredentialItem {
  role: string;
  email: string;
  password: string;
  color: string;
  bgColor: string;
  icon: string;
}

const credentials: CredentialItem[] = [
  {
    role: 'Admin Access',
    email: 'main@gmail.com',
    password: 'mainadmin123',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    icon: '🛡️'
  },
  {
    role: 'Agent Access',
    email: 'agent@gmail.com',
    password: 'Agent123!',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    icon: '🏪'
  },
  {
    role: 'User Access',
    email: 'user@gmail.com',
    password: 'User123!',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    icon: '👤'
  }
];

interface TestCredentialsProps {
  title?: string;
  subtitle?: string;
  showRegisterHint?: boolean;
}

export default function TestCredentials({ 
  title = "Demo Credentials", 
  subtitle,
  showRegisterHint = false 
}: TestCredentialsProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const CopyButton = ({ text, field }: { text: string; field: string }) => (
    <button
      onClick={() => copyToClipboard(text, field)}
      className="ml-2 p-1 hover:bg-muted rounded transition-colors"
      title="Click to copy"
    >
      {copiedField === field ? (
        <Check className="w-3 h-3 text-green-500" />
      ) : (
        <Copy className="w-3 h-3 text-muted-foreground" />
      )}
    </button>
  );

  return (
    <div className="mt-8 p-4 bg-muted/50 rounded-lg border">
      <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
        <span className="w-2 h-2 bg-primary rounded-full"></span>
        {title}
      </h3>
      {subtitle && (
        <p className="text-xs text-muted-foreground mb-3">
          {subtitle}
        </p>
      )}
      <div className="space-y-3 text-xs">
        {credentials.map((cred, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-background rounded border hover:shadow-sm transition-shadow">
            <div className="flex-1">
              <div className={`font-medium ${cred.color} mb-1`}>{cred.role}</div>
              <div className="flex items-center text-muted-foreground">
                <span>📧 {cred.email}</span>
                <CopyButton text={cred.email} field={`email-${index}`} />
              </div>
              <div className="flex items-center text-muted-foreground">
                <span>🔑 {cred.password}</span>
                <CopyButton text={cred.password} field={`password-${index}`} />
              </div>
            </div>
            <div className={`w-8 h-8 ${cred.bgColor} rounded-full flex items-center justify-center ml-3`}>
              <span className={`${cred.color} text-sm`}>{cred.icon}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-2 border-t">
        <p className="text-xs text-muted-foreground text-center">
          {showRegisterHint ? (
            <>💡 Or register a new account to explore the platform</>
          ) : (
            <>🖱️ Click the copy icons to copy credentials • Perfect for testing different roles</>
          )}
        </p>
      </div>
    </div>
  );
}
