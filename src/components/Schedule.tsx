import { Clock, Sun, Sunset, Moon } from 'lucide-react';

const scheduleData = {
  fromWhitefield: {
    morning: ["04:15 AM", "05:15 AM", "06:15 AM", "07:15 AM", "07:40 AM", "08:20 AM", "09:20 AM", "10:20 AM", "10:45 AM", "11:15 AM", "11:45 AM"],
    evening: ["02:40 PM", "03:10 PM", "03:30 PM", "04:30 PM", "05:25 PM", "06:15 PM", "06:40 PM", "07:55 PM", "08:50 PM", "09:50 PM", "10:40 PM"]
  },
  fromAirport: {
    morning: ["06:15 AM", "07:10 AM", "08:15 AM", "09:15 AM", "09:40 AM", "10:15 AM", "11:15 AM"],
    afternoon: ["12:15 PM", "12:50 PM", "01:15 PM", "02:10 PM", "04:45 PM", "05:15 PM", "06:00 PM", "06:45 PM", "07:45 PM", "08:40 PM"],
    nightService: [
      { time: "12:40 AM", label: "15A" },
      { time: "09:15 PM", label: "15A" },
      { time: "10:00 PM", label: "15A" },
      { time: "10:40 PM", label: "15A" },
      { time: "11:45 PM", label: "15A" }
    ]
  }
};

const TimeSlot = ({ time, index, label }: { time: string; index: number; label?: string }) => (
  <div 
    className="glass px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-primary/20 transition-colors cursor-default flex items-center gap-1"
    style={{ animationDelay: `${index * 0.05}s` }}
  >
    {time}
    {label && <span className="text-xs bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded">{label}</span>}
  </div>
);

const Schedule = () => {
  return (
    <section id="schedule" className="py-24 relative bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Schedule</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Buses run every 1 hour from early morning to midnight
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* From Whitefield */}
          <div className="glass-strong rounded-2xl p-6 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-glow">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">From Whitefield/Vydehi</h3>
                <p className="text-sm text-muted-foreground">To Airport</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">Morning</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {scheduleData.fromWhitefield.morning.map((time, i) => (
                    <TimeSlot key={time} time={time} index={i} />
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sunset className="w-4 h-4 text-orange-400" />
                  <span className="text-sm font-medium text-orange-400">Evening</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {scheduleData.fromWhitefield.evening.map((time, i) => (
                    <TimeSlot key={time} time={time} index={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* From Airport */}
          <div className="glass-strong rounded-2xl p-6 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center shadow-gold">
                <Clock className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">From Airport</h3>
                <p className="text-sm text-muted-foreground">To Whitefield/Vydehi</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">Morning</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {scheduleData.fromAirport.morning.map((time, i) => (
                    <TimeSlot key={time} time={time} index={i} />
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Afternoon / Evening</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {scheduleData.fromAirport.afternoon.map((time, i) => (
                    <TimeSlot key={time} time={time} index={i} />
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Moon className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-medium text-red-400">Night Service (KIA-15A)</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {scheduleData.fromAirport.nightService.map((slot, i) => (
                    <TimeSlot key={slot.time} time={slot.time} index={i} label={slot.label} />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  * KIA-15A is only return trip from Airport to City in night. It covers entire Whitefield Area.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            * Schedules may vary on holidays. Frequency increases during peak hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
