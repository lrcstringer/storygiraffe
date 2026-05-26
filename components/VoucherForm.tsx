"use client";

import { Ticket } from "lucide-react";

export default function VoucherForm() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 mx-auto">
        <Ticket size={28} className="text-brand-amber" />
      </div>
      <h2 className="text-xl font-bold text-brand-navy text-center mb-6">
        Redeem your voucher
      </h2>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: wire up Firebase voucher redemption
        }}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Voucher or gift code
          </label>
          <input
            type="text"
            placeholder="e.g. STORY-XXXX-XXXX"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-amber focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-brand-amber text-white font-semibold py-3 rounded-xl hover:bg-brand-amber-hover transition-colors"
        >
          Redeem
        </button>
      </form>

      <p className="text-xs text-gray-400 text-center mt-5">
        Vouchers are single-use. You&apos;ll need a StoryGiraffe account to
        redeem.{" "}
        <a href="/signin" className="text-brand-amber hover:underline">
          Sign in here.
        </a>
      </p>
    </div>
  );
}
