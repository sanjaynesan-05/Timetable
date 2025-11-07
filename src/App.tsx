import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Exam, Countdown } from './types';

const motivationalQuotes: string[] = [
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn't just find you. You have to go out and get it.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Don't stop when you're tired. Stop when you're done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It's going to be hard, but hard does not mean impossible.",
  "Don't wait for opportunity. Create it.",
  "Your limitation—it's only your imagination.",
  "Discipline is doing what needs to be done, even when you don’t feel like it.",
  "Success is built on consistency, not motivation.",
  "The secret to getting ahead is getting started.",
  "Stay patient and trust your journey.",
  "You don’t have to be great to start, but you have to start to be great.",
  "Study like there’s no tomorrow, because your future depends on it.",
  "Every expert was once a beginner.",
  "Winners are not those who never fail, but those who never quit.",
  "If you get tired, learn to rest — not to quit.",
  "Effort is never wasted, even when it doesn’t show immediately.",
  "Be stronger than your excuses.",
  "Greatness is earned, not given.",
  "The only bad study session is the one you didn’t do.",
  "Consistency beats intensity every single time.",
  "When you feel like quitting, remember why you started.",
  "Dream big. Work hard. Stay humble.",
  "Make yourself proud.",
  "A little progress each day adds up to big results.",
  "Don’t wish for it. Work for it.",
  "Study now, shine later.",
  "Work hard in silence. Let your success make the noise.",
  "Be addicted to improvement.",
  "The best view comes after the hardest climb.",
  "If you can imagine it, you can achieve it.",
  "The future depends on what you do today.",
  "You are capable of more than you know.",
  "Push through the pain. The results will be worth it.",
  "Excuses don’t get results.",
  "Success starts with self-belief.",
  "Winners focus on winning. Losers focus on winners.",
  "Your dreams don’t work unless you do.",
  "You didn’t come this far to only come this far.",
  "Every day is another chance to improve.",
  "Doubt kills more dreams than failure ever will.",
  "Stay focused. It’s not supposed to be easy.",
  "Make each day your masterpiece.",
  "Don't be afraid to fail. Be afraid not to try.",
  "A goal without a plan is just a wish.",
  "Progress, not perfection.",
  "Grind now, glory later.",
  "Success is not for the lazy.",
  "Keep your eyes on the goal, not the obstacles.",
  "Your future self is watching you — don’t disappoint them.",
  "Don’t let procrastination steal your potential.",
  "Success requires no explanations. Failure permits no alibis.",
  "You are stronger than you think.",
  "Wake up and chase your dreams.",
  "Study hard. Stay humble. Hustle always.",
  "Small steps every day create lasting change.",
  "Learn more, grow more, be more.",
  "Stop doubting yourself. Work harder.",
  "The moment you give up is the moment you let someone else win.",
  "The key to success is consistency.",
  "Good things come to those who work for them.",
  "Sacrifice for what you want, or what you want becomes the sacrifice.",
  "Don't let yesterday take too much of today.",
  "Focus on progress, not perfection.",
  "You can do hard things.",
  "Every chapter of struggle leads to a story of strength.",
  "Don’t fear failure — fear regret.",
  "Study like your dreams depend on it. Because they do.",
  "Stay hungry for knowledge.",
  "One day, all the late nights will make sense.",
  "The difference between try and triumph is a little “umph”.",
  "Study. Sleep. Repeat.",
  "Your potential is endless.",
  "Effort today equals excellence tomorrow.",
  "The pain of discipline is better than the pain of regret.",
  "Let your hustle speak louder than your words.",
  "It’s not about being the best. It’s about being better than yesterday.",
  "You have 24 hours — use them wisely.",
  "Be brave enough to start.",
  "Do it with passion or not at all.",
  "Success loves preparation.",
  "The road to success is always under construction.",
  "A focused mind is a powerful weapon.",
  "Every sunrise is a chance to reset and rise higher.",
  "Great minds don’t wait for motivation — they create it.",
  "It always seems impossible until it’s done.",
  "Excellence is not an act, but a habit.",
  "You can’t cheat the grind. It knows how much you’ve invested.",
  "Start now. Not later. Not tomorrow.",
  "Commit to your goals like your life depends on it.",
  "Study hard enough to surprise yourself.",
  "Winners are made in silence.",
  "You owe it to yourself to give your best.",
  "Stay focused. Stay fierce. Stay fearless.",
  "Preparation is the key to confidence.",
  "Stop scrolling. Start studying.",
  "One chapter at a time — you’ll get there.",
  "Study smarter, not harder — but always study.",
  "Keep grinding. Your future self is cheering for you.",
  "Turn your dreams into plans and your plans into actions.",
  "Knowledge is power. Effort is the engine.",
  "Push beyond your comfort zone — that’s where growth begins.",
  "Believe in the power of yet: you’re not there *yet*.",
  "Show up even when it’s tough.",
  "Motivation gets you started. Discipline keeps you going.",
  "Don’t be average. Be legendary.",
  "Study until you’re proud of yourself.",
  "Stay calm. Study strong. Shine brighter.",
  "Every failure is a setup for a comeback.",
  "The effort you put in today decides your tomorrow.",
  "Focus on your goals. Ignore the noise.",
  "The grind never lies — it gives back what you invest.",
  "You don’t have to be perfect, just consistent.",
  "Your results will speak louder than your excuses.",
  "Be the student who never gives up.",
  "Study now, sleep later. The world can wait.",
  "Your mind is your greatest asset — train it daily.",
  "Don’t just dream it, discipline it.",
  "Success starts with one decision: to try again."
];

const exams: Exam[] = [
  {
    id: 1,
    subject: "Big Data Tools and Techniques LAB",
    date: "2025-11-11",
    time: "LAB",
    session: "",
    fullTime: "LAB Exam"
  },
  {
    id: 2,
    subject: "Full Stack Development LAB",
    date: "2025-11-14",
    time: "LAB",
    session: "",
    fullTime: "LAB Exam"
  },
  {
    id: 3,
    subject: "Deep Learning LAB",
    date: "2025-11-15",
    time: "LAB",
    session: "",
    fullTime: "LAB Exam"
  },
  {
    id: 4,
    subject: "Operating Systems",
    date: "2025-11-19",
    time: "09:30",
    session: "FN",
    fullTime: "9:30 AM – 12:30 PM"
  },
  {
    id: 5,
    subject: "Full Stack Development",
    date: "2025-11-22",
    time: "09:30",
    session: "FN",
    fullTime: "9:30 AM – 12:30 PM"
  },
  {
    id: 6,
    subject: "Data Warehousing and Data Mining",
    date: "2025-11-25",
    time: "14:00",
    session: "AN",
    fullTime: "2:00 PM – 5:00 PM"
  },
  {
    id: 7,
    subject: "Deep Learning",
    date: "2025-11-28",
    time: "09:30",
    session: "FN",
    fullTime: "9:30 AM – 12:30 PM"
  },
  {
    id: 8,
    subject: "Big Data Tools and Techniques",
    date: "2025-12-01",
    time: "09:30",
    session: "FN",
    fullTime: "9:30 AM – 12:30 PM"
  },
  {
    id: 9,
    subject: "Theory of Computation",
    date: "2025-12-03",
    time: "09:30",
    session: "FN",
    fullTime: "9:30 AM – 12:30 PM"
  }
];

// Format date helper
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};

// Exam Card Component for Vertical Timeline Style
const ExamCard = ({ exam, index, countdown }: { exam: Exam; index: number; countdown: Countdown }) => {
  const countdownItems = [
    { label: 'Days', value: countdown.days },
    { label: 'Hours', value: countdown.hours },
    { label: 'Mins', value: countdown.minutes },
    { label: 'Secs', value: countdown.seconds }
  ];

  const gradientColors = [
    'from-purple-500 to-pink-500',
    'from-blue-500 to-cyan-500',
    'from-pink-500 to-rose-500',
    'from-purple-600 to-blue-600',
    'from-cyan-500 to-blue-600',
    'from-rose-500 to-pink-600',
    'from-violet-500 to-purple-600',
    'from-indigo-500 to-blue-500',
    'from-fuchsia-500 to-purple-600',
  ];

  const gradientColor = gradientColors[index % gradientColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-4 md:gap-8"
    >
      {/* Timeline Icon */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="relative"
        >
          <div className={`w-12 h-12 bg-gradient-to-br ${gradientColor} rounded-full shadow-lg flex items-center justify-center text-xl`}>
            📚
          </div>
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`absolute inset-0 w-12 h-12 bg-gradient-to-br ${gradientColor} rounded-full opacity-20`}
          ></motion.div>
        </motion.div>

        {/* Timeline Line */}
        {index !== exams.length - 1 && (
          <div className="w-1 h-24 md:h-32 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 mt-2"></div>
        )}
      </div>

      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex-1 mb-12 md:mb-16"
      >
        <div
          className="relative overflow-hidden rounded-2xl p-6 md:p-8 backdrop-blur-xl border shadow-2xl"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            borderColor: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-10`}></div>

          <div className="relative z-10">
            {/* Date */}
            <p className="text-gray-300 font-quicksand text-sm md:text-base mb-2">
              {formatDate(exam.date)}
            </p>

            {/* Subject Name */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-quicksand drop-shadow-sm">
              {exam.subject}
            </h3>

            {/* Session and Time */}
            <p className={`bg-gradient-to-r ${gradientColor} text-transparent bg-clip-text font-extrabold tracking-wider mb-4 text-sm md:text-base`}>
              {exam.session ? `${exam.session} Session • ${exam.fullTime}` : exam.fullTime}
            </p>

            {/* Countdown Grid */}
            <div className="grid grid-cols-4 gap-2 md:gap-3">
              {countdownItems.map((item, idx) => (
                <div key={`countdown-${idx}`} className="text-center">
                  <div className="bg-gradient-to-br from-purple-600/40 to-pink-600/40 backdrop-blur-sm rounded-lg p-2 md:p-3 mb-1 md:mb-2 border border-white/20">
                    <span className="text-base md:text-lg font-bold text-white font-quicksand block">
                      {String(item.value).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-xs text-gray-300 uppercase tracking-wider font-semibold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Corner decoration */}
          <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${gradientColor} opacity-10 rounded-bl-full`}></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const App = () => {
  const [currentQuote, setCurrentQuote] = useState<number>(0);
  const [countdowns, setCountdowns] = useState<Record<number, Countdown>>({});
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>('default');
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(false);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % motivationalQuotes.length);
    }, 5000);

    return () => clearInterval(quoteInterval);
  }, []);

  // Notification permission handling
  useEffect(() => {
    if ('Notification' in window) {
      setNotificationPermission(Notification.permission);
    }
  }, []);

  // Notification scheduling
  useEffect(() => {
    if (!notificationsEnabled || notificationPermission !== 'granted') return;

    const scheduleNotifications = () => {
      const now = new Date();

      exams.forEach((exam) => {
        const examDateTime = new Date(`${exam.date}T${exam.time === 'LAB' ? '09:00' : exam.time}:00`);

        if (examDateTime <= now) return; // Skip past exams

        const timeDiff = examDateTime.getTime() - now.getTime();

        // Schedule notifications for 1 day, 1 hour, and 15 minutes before
        const notificationTimes = [
          { delay: 24 * 60 * 60 * 1000, message: `📚 ${exam.subject} is tomorrow!` },
          { delay: 60 * 60 * 1000, message: `⏰ ${exam.subject} starts in 1 hour!` },
          { delay: 15 * 60 * 1000, message: `🚨 ${exam.subject} starts in 15 minutes! Get ready!` }
        ];

        notificationTimes.forEach(({ delay, message }) => {
          if (timeDiff > delay) {
            const notificationTime = examDateTime.getTime() - delay;
            const timeoutId = setTimeout(() => {
              new Notification('Exam Reminder', {
                body: message,
                icon: '/favicon.ico',
                badge: '/favicon.ico',
                tag: `exam-${exam.id}-${delay}`,
                requireInteraction: delay <= 15 * 60 * 1000 // Keep 15-min notification visible
              });
            }, notificationTime - now.getTime());

            // Store timeout ID for cleanup (in a real app, you'd want to persist this)
            return () => clearTimeout(timeoutId);
          }
        });
      });
    };

    scheduleNotifications();
  }, [notificationsEnabled, notificationPermission, countdowns]);

  const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
      alert('This browser does not support notifications');
      return;
    }

    try {
      const permission = await Notification.requestPermission();
      setNotificationPermission(permission);
      if (permission === 'granted') {
        setNotificationsEnabled(true);
        new Notification('Notifications Enabled! 🎉', {
          body: 'You will now receive reminders for upcoming exams.',
          icon: '/favicon.ico'
        });
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }
  };

  useEffect(() => {
    const calculateAllCountdowns = (): void => {
      const now = new Date();
      const newCountdowns: Record<number, Countdown> = {};

      exams.forEach((exam) => {
        const examDateTime = new Date(`${exam.date}T${exam.time === 'LAB' ? '09:00' : exam.time}:00`);
        const difference = examDateTime.getTime() - now.getTime();

        if (difference <= 0) {
          newCountdowns[exam.id] = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        } else {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);
          newCountdowns[exam.id] = { days, hours, minutes, seconds };
        }
      });

      setCountdowns(newCountdowns);
    };

    calculateAllCountdowns();
    const countdownInterval = setInterval(calculateAllCountdowns, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4 font-quicksand"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎓 Semester Exam Countdown
          </motion.h1>
          <p className="text-xl md:text-2xl text-purple-300 font-semibold mb-6">
            Nov/Dec 2025
          </p>
          <p className="text-lg text-gray-300 font-medium">
            Every second counts — stay focused, stay strong 💪
          </p>
        </motion.header>

        {/* Notification Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="flex justify-center">
            <motion.button
              onClick={requestNotificationPermission}
              disabled={notificationPermission === 'denied'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                notificationsEnabled
                  ? 'bg-green-500/20 text-green-300 border border-green-500/30 hover:bg-green-500/30'
                  : notificationPermission === 'denied'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/30 cursor-not-allowed'
                  : 'bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30'
              } backdrop-blur-xl shadow-lg`}
            >
              {notificationsEnabled
                ? '🔔 Notifications Enabled'
                : notificationPermission === 'denied'
                ? '🚫 Notifications Blocked'
                : '🔔 Enable Exam Notifications'
              }
            </motion.button>
          </div>
          {notificationPermission === 'default' && (
            <p className="text-center text-sm text-gray-400 mt-2">
              Get reminded about upcoming exams automatically
            </p>
          )}
        </motion.div>

        {/* Motivational Quote */}
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12 p-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl"
        >
          <p className="text-center text-xl md:text-2xl text-white font-quicksand italic">
            "✨ {motivationalQuotes[currentQuote]} ✨"
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {exams.map((exam, index) => {
              const examDateTime = new Date(`${exam.date}T${exam.time === 'LAB' ? '09:00' : exam.time}:00`);
              const now = new Date();
              const isCompleted = examDateTime <= now;

              if (isCompleted) return null;

              return (
                <ExamCard key={exam.id} exam={exam} index={index} countdown={countdowns[exam.id] || { days: 0, hours: 0, minutes: 0, seconds: 0 }} />
              );
            })}

            {/* Timeline End */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: exams.length * 0.1 }}
              className="relative flex gap-4 md:gap-8"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full shadow-lg flex items-center justify-center text-2xl">
                  ✅
                </div>
              </div>
              <div className="flex-1 mb-12">
                <div className="relative overflow-hidden rounded-2xl p-6 md:p-8 backdrop-blur-xl border"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
                  }}>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2 font-quicksand">🎉 All Exams Complete!</h3>
                    <p className="text-gray-300">You've made it through the semester! Time to celebrate! 🌟</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center py-8 mt-12"
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-gray-300 text-lg font-manrope">
              📘 Crafted by <span className="text-purple-400 font-bold">Sanjai</span> | Success is built one exam at a time.
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default App;
