import a from 'b';

const URL = 'https://example.org';
const mod = require('mod');

let foo = 'bar';
foo = 2;
foo = `simple literal with ${mod}`;

var dodo = true;
dodo = false;
dodo = `more
complicated literal
with ${mod}
`;

const obj = {
  simple: 'test',
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

let undef = undefined;
undef = void 0;
undef = void(0);

const n = null;

console.log(String, Boolean, Number, Object, Array);

class App extends React.Component {
  static defaultProps = {
    auto: true
  };

  static propTypes = {
    auto: PropTypes.bool.isRequired,
    obj: PropTypes.shape({
      foo: PropTypes.string.isRequired
    })
  }

  render() {
    return (
      <div className="wrap">
        <TestChild
          propNum={2}
          propVar={foo}
          propObj={{a: 1, b: 'c', d: false}}
          propStr="value"
          propArr={[1, 'a', true]}
        />
      </div>
    );
  }

  otherMethod() {
    function innerFn(argument) {
      // body...
    }

    innerFn();
  }
}

function doSmth (a, b, c, ...more) {
  if (isNaN(b)) {
    return;
  }

  for (let i = 0; i < more.length; i++) {
    console.log(i);
  }

  while(c < 2) {
    doSmth(c);
  }
}

const doSmthAsyncBefore = async () => {
  return [].reduce(memo => memo.push(Array.isArray(memo)), []);
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
