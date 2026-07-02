import PageShell from '@/components/PageShell';
import Image from 'next/image';

export default function TeamPage() {
  return (
    <PageShell
      title="Our Team"
      subtitle="Meet the experts behind Hairise's world-class hair restoration."
      breadcrumbs={[{ label: 'Team' }]}
    >
      <section className="py-24" style={{ background: '#eff4f8' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. James Wilson', role: 'Lead Surgeon', img: '/images/hero_bg_2.png' },
              { name: 'Dr. Sarah Chen', role: 'Trichologist', img: '/images/diagnosis_1.png' },
              { name: 'Dr. Michael Osei', role: 'Restoration Specialist', img: '/images/diagnosis_2.png' }
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-[24px] overflow-hidden shadow-sm text-center">
                <div className="relative h-64 w-full bg-gray-200">
                  <Image src={member.img} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#222]">{member.name}</h3>
                  <p className="text-[#555] mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
