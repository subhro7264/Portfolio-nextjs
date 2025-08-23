import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-80">
      <FaSpinner className="animate-spin text-4xl text-indigo-500" />
    </div>
  );
};

export default Loading;
