import { useSearchParams } from "react-router-dom";
import PendingApproval from "./PendingApproval";

const PendingApprovalPage = () => {
  const [searchParams] = useSearchParams();
  const userType = (searchParams.get("type") as "admin" | "mobilizer" | "volunteer") || "volunteer";
  const email = searchParams.get("email") || undefined;

  return <PendingApproval userType={userType} email={email} />;
};

export default PendingApprovalPage;
