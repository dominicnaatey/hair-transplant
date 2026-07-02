import PageShell from '@/components/PageShell';
import Link from 'next/link';

export default function KnowledgeBasePage() {
  return (
    <PageShell
      title="Knowledge Base"
      subtitle="Learn everything you need to know about hair restoration."
      breadcrumbs={[{ label: 'Knowledge Base' }]}
    >
      <section className="py-24" style={{ background: '#eff4f8' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Understanding FUE vs FUT', desc: 'A detailed comparison of the two most common hair transplant techniques.' },
              { title: 'Preparing for Your Transplant', desc: 'Essential steps to take in the weeks leading up to your procedure.' },
              { title: 'Post-Op Care Guide', desc: 'How to care for your new grafts to ensure maximum survival and growth.' },
              { title: 'Causes of Hair Loss', desc: 'Understanding genetics, stress, and other factors that contribute to hair loss.' }
            ].map((article, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-[#222]">{article.title}</h3>
                <p className="text-[#555] mb-4">{article.desc}</p>
                <Link href="#" className="text-[#2458B3] font-semibold hover:underline">Read Article &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
