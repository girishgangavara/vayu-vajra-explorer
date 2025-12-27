import { Ticket, Banknote, Smartphone, Info, Calendar } from 'lucide-react';

const FareInfo = () => {
  return (
    <section id="fare" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Fare Information</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Affordable premium travel to Kempegowda International Airport
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-2xl p-8 shadow-card">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Fare card */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                <div className="relative bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-6 border border-accent/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Ticket className="w-6 h-6 text-accent" />
                    <span className="text-sm font-medium text-accent uppercase tracking-wider">End-to-End Fare</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-bold text-gradient-gold">₹300</span>
                    <span className="text-muted-foreground">approx.</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Whitefield/Vydehi to Kempegowda International Airport
                  </p>
                </div>

                {/* Monthly Pass */}
                <div className="relative mt-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-6 border border-primary/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <span className="text-sm font-medium text-primary uppercase tracking-wider">Monthly Pass</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-gradient">₹4,000</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Available at Vydehi TTMC & Kadugodi via Tummoc App
                  </p>
                </div>
              </div>

              {/* Payment methods */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-foreground mb-4">Payment Methods</h3>
                
                <div className="flex items-center gap-4 p-4 glass rounded-xl">
                  <Banknote className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="font-medium text-foreground">Cash</p>
                    <p className="text-sm text-muted-foreground">Pay directly to the conductor</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass rounded-xl">
                  <Smartphone className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">UPI Payments</p>
                    <p className="text-sm text-muted-foreground">GPay, PhonePe, Paytm & more</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass rounded-xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20">
                  <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-xs font-bold text-white">T</div>
                  <div>
                    <p className="font-medium text-foreground">Tummoc App</p>
                    <p className="text-sm text-muted-foreground">Monthly pass purchase & booking</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-primary/10 rounded-xl flex items-start gap-3">
              <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Note:</span> Fares are stage-based and may vary depending on your boarding and alighting points. Senior citizens, students, and differently-abled passengers may avail discounts as per BMTC policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FareInfo;
