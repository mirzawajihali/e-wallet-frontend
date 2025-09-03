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
import { AlertCircle, CheckCircle2 } from "lucide-react";
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
    <div className="p-6 max-w-2xl mx-auto"> {/* Increased width from max-w-md to max-w-2xl */}
      <h1 className="text-2xl font-semibold text-center mb-6">Send Money</h1>
      
      {/* Success Alert */}
      {successMessage && (
        <Alert variant="default" className="bg-green-50 border-green-200 mb-4">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            {successMessage}
          </AlertDescription>
        </Alert>
      )}

      {/* Error Alert */}
      {errorMessage && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {errorMessage}
          </AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6"> {/* Increased spacing */}
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
                <FormLabel className="text-base">Receiver's Email</FormLabel> {/* Larger label */}
                <FormControl>
                  <Input
                    placeholder="Enter receiver's email address"
                    type="email"
                    className="h-12 text-base"
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
                <FormLabel className="text-base">Amount</FormLabel> {/* Larger label */}
                <FormControl>
                  <Input
                    placeholder="Enter amount to send"
                    type="number"
                    step="0.01"
                    min="0.01"
                    className="h-12 text-base" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full h-12 text-base" 
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Money"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SendMoney;