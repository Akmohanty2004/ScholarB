const fs = require('fs');
const files = [
  './src/pages/TutorListing.jsx',
  './src/pages/TutorProfile.jsx',
  './src/pages/DemoBookingFlow.jsx'
];

const replacements = [
  { from: /bg-white(?! \w)/g, to: 'bg-white dark:bg-slate-900' },
  { from: /text-slate-900/g, to: 'text-slate-900 dark:text-white' },
  { from: /text-slate-800/g, to: 'text-slate-800 dark:text-slate-200' },
  { from: /text-slate-700/g, to: 'text-slate-700 dark:text-slate-300' },
  { from: /text-slate-600/g, to: 'text-slate-600 dark:text-slate-400' },
  { from: /text-slate-500/g, to: 'text-slate-500 dark:text-slate-400' },
  { from: /bg-slate-50/g, to: 'bg-slate-50 dark:bg-slate-950' },
  { from: /bg-slate-100/g, to: 'bg-slate-100 dark:bg-slate-800' },
  { from: /border-slate-200/g, to: 'border-slate-200 dark:border-slate-800' },
  { from: /border-slate-300/g, to: 'border-slate-300 dark:border-slate-700' },
  { from: /border-slate-100/g, to: 'border-slate-100 dark:border-slate-800' },
  // Buttons polish
  { from: /bg-primary-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors shadow-sm/g, to: 'btn-primary px-8 py-3' },
  { from: /bg-primary-600 text-white px-6 py-2\.5 rounded-lg font-medium hover:bg-primary-700 transition-colors/g, to: 'btn-primary px-6 py-2.5' },
  { from: /bg-slate-100 dark:bg-slate-800 transition-colors duration-300 text-slate-700 dark:text-slate-300 transition-colors duration-300 px-6 py-2\.5 rounded-lg font-medium hover:bg-slate-200 transition-colors border border-slate-200 dark:border-slate-700 transition-colors duration-300/g, to: 'btn-outline px-6 py-2.5 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800' },
  { from: /bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto/g, to: 'btn-primary px-8 py-4 text-lg w-full sm:w-auto' },
  { from: /bg-primary-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors/g, to: 'btn-primary px-8 py-3' },
  { from: /bg-slate-100 text-slate-700 px-8 py-3 rounded-xl font-medium hover:bg-slate-200 transition-colors/g, to: 'btn-outline px-8 py-3' }
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Clean up any duplicated transition classes from previous partial runs
  content = content.replace(/transition-colors duration-300/g, '');
  
  replacements.forEach(r => {
    content = content.replace(r.from, r.to);
  });

  // Specifically target bg-white because the regex might miss some due to trailing spaces
  content = content.replace(/className="([^"]*)bg-white([^"]*)"/g, (match, p1, p2) => {
    if (!p1.includes('dark:bg-') && !p2.includes('dark:bg-')) {
      return `className="${p1}bg-white dark:bg-slate-900${p2}"`;
    }
    return match;
  });

  fs.writeFileSync(file, content);
  console.log('Successfully updated ' + file);
});
