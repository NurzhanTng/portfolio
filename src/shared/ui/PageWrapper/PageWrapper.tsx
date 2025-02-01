import { NavBar } from '@/widgets/NavBar';
import { Footer } from '@/widgets/Footer';

export const PageWrapper = ({ children, className }) => {
  return (
    <div className="bg-light">
      <NavBar />

      <main className={className}>{children}</main>

      <Footer />
    </div>
  );
};
