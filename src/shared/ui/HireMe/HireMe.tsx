import { CircularText } from '@/shared/ui/Icon/Icon.tsx';
import { Link } from 'react-router-dom';

export const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className="fill-dark animate-spin-slow w-48" />
        <Link
          to="mailto:tangatarovnurzan@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full hover:bg-light hover:text-dark"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};
