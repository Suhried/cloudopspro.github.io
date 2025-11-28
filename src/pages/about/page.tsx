import Layout from "../../components/feature/Layout";
import AboutSection from "../home/components/About";
import CTA from "../home/components/CTA";

export default function AboutPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <AboutSection />
        <CTA />
      </div>
    </Layout>
  );
}

