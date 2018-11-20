import a from 'b';

const dep = require('dep');
const URL = 'https://example.org';

let foo = 'bar';
foo = 2;
foo = `simple literal with ${mod}`;
foo = `more
complicated literal
with ${mod}
`;

var bool = true;
bool = false;

let undef = undefined;
undef = void 0;
undef = void(0);
undef = null;

const obj = {
  str: 'test',
  simpleVar: foo,
  'str': 'value',
  [dynamic]: true,
  fn() {
    return 2;
  },
  arrow: () => {},
  nested: {
    bool: false,
    ...spreadObj
  }
  "another-str": {
    "nested-str": URL,
    dodo
  }
};

console.log(obj.simple, obj['another-str'], obj.fn());

function doSmth (a, b, c, ...more) {
  for (let i = 0; i < more.length; i++) {
    console.log(i);
  }

  while(c < 2) {
    doSmth(c);
  }
}

const doSmthAsyncBefore = async () => {
  setTimeout(() => {
    console.log('async fn')
  }, 1000) ;
}

async function doSmthAsync(a = 1, b = '2', c = false, d = {}) {
  const { nested } = d;

  if (typeof window !== 'undefined') {
    return JSON.parse(JSON.stringify(nested));
  }

  try {
    await doSmthAsyncBefore();
  } catch (err) {
    console.log(err);
  } finally {
    return function(argument) {
      // comment
    }
  }
}

@annotation
class MyClass {
  contstructor() {
    super();

    this.desc = 'test class';
  }
}

export function annotation(target) {
  target.annotated = true;
}

function OldSchoolClass (opts = {}) {
  return this;
}

OldSchoolClass.prototype.key = 'value';
OldSchoolClass.prototype.arrowMethod = () => 'value';
OldSchoolClass.prototype.method = function () {
  return this;
}

export MyClass;

export default OldSchoolClass;
