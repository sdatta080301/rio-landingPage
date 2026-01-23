"use client";

import {
  Link2,
  Tags,
  Target,
  TrendingUp,
  CreditCard,
  Plane,
  Sparkles,
  Brain,
  ArrowRight
} from "lucide-react";

const currentFeatures = [
  {
    icon: Link2,
    title: "Automated Tracking",
    description: "Connect your accounts with Plaid for seamless, real-time financial tracking.",
  },
  {
    icon: Tags,
    title: "Smart Categorization",
    description: "Transactions automatically categorized so you always know where your money goes.",
  },
  {
    icon: Target,
    title: "Budget Setting",
    description: "Set custom budgets for any category and take control of your spending.",
  },
  {
    icon: TrendingUp,
    title: "Budget Tracking",
    description: "Monitor your progress in real-time with visual insights and alerts.",
  },
  {
    icon: CreditCard,
    title: "Credit Card Dashboard",
    description: "Track spending, categories, and balances across all your cards in one place.",
  },
];

const comingSoonFeatures = [
  {
    icon: Plane,
    title: "AI Travel Agent",
    description: "Find the most optimal way to use your points and miles for maximum value.",
  },
  {
    icon: Sparkles,
    title: "AI Card Advisor",
    description: "Get personalized credit card recommendations based on your spending habits.",
  },
  {
    icon: Brain,
    title: "AI Spending Insights",
    description: "Intelligent analysis of your spending patterns with actionable advice.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative bg-background py-24 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Everything you need
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-light">
            Powerful tools to take control of your finances
          </p>
        </div>

        {/* Current Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-20">
          {currentFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="relative">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">Coming Soon</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
              AI-Powered Features
            </h3>
            <p className="text-white/50 text-base max-w-xl mx-auto font-light">
              The future of personal finance, powered by artificial intelligence
            </p>
          </div>

          {/* Coming Soon Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {comingSoonFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-purple-500/[0.05] to-transparent border border-purple-500/10 transition-all duration-300"
              >
                {/* Blurred content */}
                <div className="blur-[6px] select-none pointer-events-none">
                  {/* Icon */}
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/30 to-violet-600/30 border border-purple-500/30 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-300" />
                  </div>

                  {/* Content */}
                  <h3 className="relative text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="relative text-white/40 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm">
                    <span className="text-purple-300 text-sm font-medium">Coming Soon</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-white/30 text-sm">
              Join the waitlist to get early access to AI features
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
