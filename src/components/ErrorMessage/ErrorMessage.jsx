import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const ErrorMessage = () => {
  toast.error("This didn't work.");

  return <Toaster position="top-center" reverseOrder={true} />;
};
export default ErrorMessage;
