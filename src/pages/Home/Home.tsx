import { Layout } from '@/widgets/Layout';
import { HireMe } from '@/shared/ui/HireMe';
import { MainIntro } from '@/widgets/MainIntro';
import { PageWrapper } from '@/shared/ui/PageWrapper';

export const Home = () => {
  return (
    <PageWrapper>
      <Layout className="flex items-center text-dark w-full h-[calc(100vh-1084px)] py-10">
        <MainIntro />
      </Layout>

      <HireMe />
    </PageWrapper>
  );
};
