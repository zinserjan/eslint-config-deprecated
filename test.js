import readDirRecursive from 'fs-readdir-recursive';
import path from 'path';
import { exec } from 'child_process';
import { CLIEngine } from 'eslint';


const cli = new CLIEngine({
  cwd: path.join(__dirname, 'test')
});

const sections = {
  good: {
    ignore: []
  },
  error: {
    ignore: [
      // ignore these cause there are no rules to support them yet :(
      'error/arrays/copy.js',
      'error/arrays/push.js',
      'error/arrow-function/multiline-parens.js',
      'error/comparison/use-shortcuts.js',
      'error/comments/api-doc.js',
      'error/comments/single-line-comment.js',
      'error/classes/use-classes.js',
      'error/destructuring/array.js',
      'error/destructuring/object.js',
      'error/destructuring/return-values.js',
      'error/functions/defaults-last-parameters.js',
      'error/functions/function-expressions.js',
      'error/objects/group-shorthand.js',
      'error/objects/prefer-computed-property.js',
      'error/modules/default-re-export.js',
      'error/modules/no-common.js',
      'error/naming-conventions/self-this.js',
      'error/type-casting/strings.js',
      'error/whitespace/blank-line-after-blocks.js'
    ]
  },
};

Promise
  .resolve()
  .then(() => {
    console.time('test lint');
    return Object
      .keys(sections)
      .map((type) => {
        const section = sections[type];
        section.type = type;
        section.files = loadTests(type, section.ignore);
        return section;
      })
      .map((section) => {
        return Promise
          .resolve()
          .then(() => execTests(section.files, section.type))
          .then((testResults) => {
            section.results = testResults;
            return section;
          });
      });
  })
  .then((testPromises) => Promise.all(testPromises))
  .then((sections) => {
    console.timeEnd('test lint');
    let code = 0;
    sections.forEach((section) => {
      console.log(`---- ${section.type} ----`);
      section.results.forEach((test) => {
        if (!test.passed) {
          code++;
        }
        reportTest(test);
      });
    });
    console.log('');
    process.exit(code);
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })

function execTests(tests, type) {
  const dir = __dirname;
  return Promise
    .resolve()
    .then(() => cli.executeOnFiles(tests))
    .then(({results}) => {
      return results.map((result) => {
        return {
          file: result.filePath.replace(dir, ''),
          result: result
        };
      })
    })
    .then((testResults) => {
      return testResults.map((t) => check(t, type));
    });
}

function check(test,type) {
  if (test.result instanceof Error) {
    return errored(test);
  }

  if (type === 'good') {
    return checkGood(test);
  }
  return checkError(test);
}


function checkGood(test) {
  const result = test.result;
  const error = result.errorCount > 0 || result.warningCount > 0;

  return {
    passed: !error,
    title: test.file,
    summary: error ? 'Lint failed' : 'Lint passed',
    detail: error ? result.messages.map(m => ({
      passed: false,
      info: `${m.message} (line ${m.line})`
    })) : [],
  };

}

function checkError(test) {
  const result = test.result;
  const error = result.errorCount > 0 || result.warningCount > 0;

  return {
    passed: error,
    title: test.file,
    summary: error ? 'Lint failed' : 'Lint passed',
    detail: error ? result.messages.map(m => ({
      passed: null,
      info: `${m.message} (line ${m.line})`
    })) : [],
  };
}


function errored(test) {
  return {
    passed: false,
    title: test.name,
    summary: String(test.result).trim()
  };
}

function reportTest(test) {
  let headline = `${icon(test.passed)}\t${test.title}`;
  if (test.summary) headline += ` - ${test.summary}`;
  console.log(headline);
  (test.detail || []).forEach(detail => {
    console.log(`\t${icon(detail.passed)}\t${detail.info}`);
  });
}

function icon(pass) {
  if (pass === null) {
    return '-';
  }
  return pass ? '✅' : '❌';
}


function loadTests(type, ignore) {
  const dir = path.join(__dirname, 'test', type);
  const files = readDirRecursive(dir);

  return files
    .filter(x => /\.js$/.test(x))
    .map(x => path.join(type, x))
    .filter(x => ignore.indexOf(x) === -1);
}
