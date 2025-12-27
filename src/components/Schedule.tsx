import { Clock, Sun, Sunset, Moon } from 'lucide-react';

const scheduleData = {
  fromWhitefield: {
    morning: ["4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM", "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM"],
    afternoon: ["8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM"],
    evening: ["2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"],
    night: ["8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM"]
  },
  fromAirport: {
    morning: ["5:30 AM", "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM"],
    afternoon: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM"],
    evening: ["4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"],
    night: ["10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM", "12:00 AM", "12:30 AM"]
  }
};

const TimeSlot = ({ time, index }: { time: string; index: number }) => (
  <div 
    className="glass px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-primary/20 transition-colors cursor-default"
    style={{ animationDelay: `${index * 0.05}s` }}
  >
    {time}
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
            Buses run every 30 minutes from early morning to midnight
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
                  <Sun className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Afternoon</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {scheduleData.fromWhitefield.afternoon.map((time, i) => (
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

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Moon className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm font-medium text-indigo-400">Night</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {scheduleData.fromWhitefield.night.map((time, i) => (
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
                  <span className="text-sm font-medium text-primary">Afternoon</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {scheduleData.fromAirport.afternoon.map((time, i) => (
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
                  {scheduleData.fromAirport.evening.map((time, i) => (
                    <TimeSlot key={time} time={time} index={i} />
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Moon className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm font-medium text-indigo-400">Night</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {scheduleData.fromAirport.night.map((time, i) => (
                    <TimeSlot key={time} time={time} index={i} />
                  ))}
                </div>
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
