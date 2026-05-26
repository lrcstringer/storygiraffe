import type { Metadata } from "next";
import VoucherForm from "@/components/VoucherForm";

export const metadata: Metadata = {
  title: "Vouchers — StoryGiraffe",
  description: "Redeem a StoryGiraffe voucher or gift code.",
};

export default function VouchersPage() {
  return (
    <div className="pt-32 flex flex-col flex-1">
      {/* Hero */}
      <section className="bg-brand-navy text-white py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-brand-amber">Vouchers</span> & Gift Codes
          </h1>
          <p className="text-gray-300 text-lg">
            Have a voucher or gift code? Redeem it here to unlock premium
            stories and tours.
          </p>
        </div>
      </section>

      {/* Redemption form */}
      <section className="bg-brand-cream flex-1 py-16 px-6">
        <div className="max-w-md mx-auto">
          <VoucherForm />
        </div>
      </section>
    </div>
  );
}
