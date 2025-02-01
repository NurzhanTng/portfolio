import { Layout } from '@/widgets/Layout';
import { Skills } from '@/widgets/Skills';
import { Experience } from '@/widgets/Experience';
import { Education } from '@/widgets/Education';
import { Biography } from '@/widgets/Biography';
import { PageWrapper } from '@/shared/ui/PageWrapper';

export const About = () => {
  return (
    <PageWrapper className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16">
        <Biography />

        <Skills />

        <Experience />

        <Education />
      </Layout>
    </PageWrapper>
  );
};
