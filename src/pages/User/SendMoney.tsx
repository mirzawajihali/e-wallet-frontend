import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSendMoneyMutation } from "@/redux/Wallet/wallet.api";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2, Send, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

const SendMoney = () => {
  const form = useForm();
  const [sendMoney, { isLoading }] = useSendMoneyMutation();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const sendMoneyData = {
      receiverEmail: data.receiverEmail,
      amount: parseFloat(data.amount)
    };

    // Reset messages
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await sendMoney(sendMoneyData).unwrap();
      if (res.success) {
        setSuccessMessage(res.message || "Money sent successfully!");
        form.reset();
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error sending money:", error);
      setErrorMessage(
        error.data?.message || 
        error.data?.error || 
        "Failed to send money. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-lg mx-auto">
        {/* Header Card */}
        <div className="bg-card rounded-lg shadow-lg border p-8 mb-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Send className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Send Money</h1>
            <p className="text-muted-foreground">Transfer funds to another user instantly</p>
          </div>
          
          {/* Success Alert */}
          {successMessage && (
            <Alert variant="default" className="bg-primary/10 border-primary/20 mb-6">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <AlertDescription className="text-primary font-medium">
                {successMessage}
              </AlertDescription>
            </Alert>
          )}

          {/* Error Alert */}
          {errorMessage && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-5 w-5" />
              <AlertDescription className="font-medium">
                {errorMessage}
              </AlertDescription>
            </Alert>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="receiverEmail"
                rules={{
                  required: "Receiver's email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      Receiver's Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter receiver's email address"
                        type="email"
                        className="h-14 text-lg border-2 focus:border-primary transition-colors"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="amount"
                rules={{
                  required: "Amount is required",
                  min: {
                    value: 0.01,
                    message: "Amount must be greater than 0"
                  },
                  validate: (value) => !isNaN(value) || "Please enter a valid number"
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-foreground flex items-center gap-2">
                       ৳ 
                      Amount
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="0.00"
                          type="number"
                          step="0.01"
                          min="0.01"
                          className="h-14 text-lg pl-12 pr-4 border-2 focus:border-primary transition-colors"
                          {...field}
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <span className="text-muted-foreground text-lg font-semibold"> ৳ </span>
                        </div>
                      </div> 
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full h-14 text-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <ArrowRight className="h-5 w-5" />
                    Send Money
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>

        {/* Info Card */}
        <div className="bg-card rounded-lg shadow-md border p-6">
          <h3 className="font-semibold text-foreground mb-3">Transfer Information</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Transfers are processed instantly
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Minimum transfer amount is  ৳ 0.01
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Ensure the receiver's email is correct
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;