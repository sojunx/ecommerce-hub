import { Spinner } from "@/components/ui/spinner";

const Loading = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Spinner className="size-8" />
    </div>
  );
};

export default Loading;
