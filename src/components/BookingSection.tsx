import { useState } from 'react';
import { Calendar, Clock, Users, Check, Loader2, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format } from 'date-fns';
import { el } from 'date-fns/locale';
import { cn } from '@/lib/utils';

interface TimeSlot {
  time: string;
  available: boolean;
}

const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  for (let hour = 12; hour <= 23; hour++) {
    for (let min = 0; min < 60; min += 30) {
      if (hour === 23 && min === 30) continue;
      const time = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
      // Mock availability - in production this comes from the API
      const available = Math.random() > 0.3;
      slots.push({ time, available });
    }
  }
  return slots;
};

const BookingSection = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [partySize, setPartySize] = useState<string>();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [musicTable, setMusicTable] = useState(false);
  
  const [step, setStep] = useState<'select' | 'form' | 'success'>('select');
  const [isLoading, setIsLoading] = useState(false);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [showSlots, setShowSlots] = useState(false);

  const checkAvailability = async () => {
    if (!date) return;
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    setTimeSlots(generateTimeSlots());
    setShowSlots(true);
    setIsLoading(false);
  };

  const handleTimeSelect = (selectedTime: string) => {
    setTime(selectedTime);
    setStep('form');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setStep('success');
  };

  const resetBooking = () => {
    setDate(undefined);
    setTime(undefined);
    setPartySize(undefined);
    setName('');
    setPhone('');
    setEmail('');
    setNotes('');
    setMusicTable(false);
    setStep('select');
    setShowSlots(false);
    setTimeSlots([]);
  };

  if (step === 'success') {
    return (
      <section id="booking" className="taverna-section bg-cream-dark">
        <div className="taverna-container">
          <div className="max-w-lg mx-auto text-center taverna-card p-8 md:p-12">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Η κράτησή σας επιβεβαιώθηκε!
            </h2>
            <p className="text-muted-foreground mb-6">
              Σας περιμένουμε στις <strong>{time}</strong> στις{' '}
              <strong>{date && format(date, 'd MMMM yyyy', { locale: el })}</strong> για{' '}
              <strong>{partySize}</strong> άτομα.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Θα λάβετε επιβεβαίωση στο τηλέφωνο {phone}
            </p>
            <Button onClick={resetBooking} variant="outline">
              Νέα Κράτηση
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="taverna-section bg-cream-dark">
      <div className="taverna-container">
        <div className="text-center mb-12">
          <h2 className="taverna-heading mb-4">Κράτηση Τραπεζιού</h2>
          <p className="taverna-subheading">Κλείστε το τραπέζι σας online</p>
        </div>

        <div className="max-w-2xl mx-auto taverna-card p-6 md:p-8">
          {step === 'select' && (
            <div className="space-y-6">
              {/* Date & Party Size Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Ημερομηνία
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          'w-full justify-start text-left font-normal taverna-input',
                          !date && 'text-muted-foreground'
                        )}
                      >
                        {date ? format(date, 'PPP', { locale: el }) : 'Επιλέξτε ημερομηνία'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={date}
                        onSelect={(d) => { setDate(d); setShowSlots(false); }}
                        disabled={(d) => d < new Date()}
                        locale={el}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Άτομα
                  </Label>
                  <Select value={partySize} onValueChange={setPartySize}>
                    <SelectTrigger className="taverna-input">
                      <SelectValue placeholder="Επιλέξτε" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? 'άτομο' : 'άτομα'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                onClick={checkAvailability} 
                disabled={!date || !partySize || isLoading}
                className="w-full taverna-button-primary"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Έλεγχος...
                  </>
                ) : (
                  'Έλεγχος Διαθεσιμότητας'
                )}
              </Button>

              {/* Time Slots */}
              {showSlots && (
                <div className="space-y-4 animate-fade-in">
                  <Label className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Διαθέσιμες Ώρες
                  </Label>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        onClick={() => slot.available && handleTimeSelect(slot.time)}
                        disabled={!slot.available}
                        className={cn(
                          'py-2 px-3 text-sm rounded-lg transition-all',
                          slot.available
                            ? 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer'
                            : 'bg-muted text-muted-foreground/50 cursor-not-allowed line-through'
                        )}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">{date && format(date, 'd MMMM yyyy', { locale: el })}</p>
                  <p className="text-sm text-muted-foreground">{time} - {partySize} άτομα</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setStep('select')}>
                  Αλλαγή
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Όνομα *</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="taverna-input"
                    placeholder="Το όνομά σας"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Τηλέφωνο *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="taverna-input"
                    placeholder="69XXXXXXXX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email (προαιρετικό)</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="taverna-input"
                  placeholder="email@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Σημειώσεις</Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="taverna-input"
                  placeholder="Αλλεργίες, ειδικές απαιτήσεις, κ.λπ."
                  rows={3}
                />
              </div>

              <div className="flex items-center space-x-3 p-4 bg-secondary/10 rounded-lg">
                <Checkbox
                  id="musicTable"
                  checked={musicTable}
                  onCheckedChange={(checked) => setMusicTable(checked as boolean)}
                />
                <Label htmlFor="musicTable" className="flex items-center gap-2 cursor-pointer">
                  <Music className="h-4 w-4 text-secondary" />
                  Θέλω τραπέζι κοντά στη μουσική
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full taverna-button-primary"
                disabled={isLoading || !name || !phone}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Επεξεργασία...
                  </>
                ) : (
                  'Ολοκλήρωση Κράτησης'
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
