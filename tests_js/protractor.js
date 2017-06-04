exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:9515/',
  suites: {
      basic: './00_basic.js',
      selectors4: './02_selectors_ng4.js',
      selectors1: './01_selectAndWait.js',
      promise: './04_puzzler_sum.js',
      promise_fix1: './04_puzzler_sum_fix1.js',
      promise_fix2: './04_puzzler_sum_fix2.js',
      login: './06_puzzler_login.js',
      logs: './05_puzzler_logs.js',
      logs_fix: './05_puzzler_logs_fix.js',
      circular: './07_circular_deps.js',
      puzzlerdate: './03_puzzler_date.js'
  }
};