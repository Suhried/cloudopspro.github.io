import Layout from "../../components/feature/Layout";
import TechnologiesSection from "../home/components/Technologies";
import CTA from "../home/components/CTA";

export default function TechnologiesPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <TechnologiesSection />
        <CTA />
      </div>
    </Layout>
  );
}

