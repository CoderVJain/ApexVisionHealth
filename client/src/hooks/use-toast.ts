import { Toast, ToastActionElement, ToastProps } from "@/components/ui/toast";
import {
  useToast as useToastOriginal,
  toast,
} from "@/components/ui/use-toast";

type ToastOptions = Omit<
  ToastProps,
  "id" | "title" | "description" | "action" | "open" | "onOpenChange"
> & {
  title?: string;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

export const useToast = () => {
  const { toast, dismiss, ...rest } = useToastOriginal();

  function showToast({
    title,
    description,
    action,
    ...props
  }: ToastOptions = {}) {
    toast({
      title,
      description,
      action,
      ...props,
    });
  }

  return {
    toast: showToast,
    dismiss,
    ...rest,
  };
};

export { toast };
