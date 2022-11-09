
### INSTALL
npm install

### RUN
npm run build

### USES

```javascript
/**
 * Date for handling and set type format.
 * Default: 'yyyy.mm.dd' `format(value)`
 */
const dateFixer = DateFixer('2021.09.16', 'yyyy.mm.dd');

// Format for output
// can use tags: yyyy, yy, mm, dd, hh, ii, ss
format('yyyy.mm.dd');
format('yyyy.mm.dd hh:ii:ss');
format('yyyy/mm/dd hh-ii-ss');

// date mutation `add (method, value)`
add ('seconds', 10)
add ('minutes', 10)
add ('hours', 10)
add ('days', 10)
add ('months', 10)
add ('years', 10)

// date mutation `sub (method, value)`
sub ('seconds', 10)
sub ('minutes', 10)
sub ('hours', 10)
sub ('days', 10)
sub ('months', 10)
sub ('years', 10)

// Copy date object
copy()

// getters
now()
day()
month()
year()
hours()
minutes()
seconds()
time()
toDateString()
toDate()
```

```javascript
// Some examples
const dateFixer = DateFixer(); // default date now, default format yyyy.mm.dd
const dateFixer = DateFixer('2021.09.16', 'yyyy.mm.dd');

dateFixer.now(); // return current date 

dateFixer.day() 
dateFixer.month()
dateFixer.year()
dateFixer.time()
        
DateFixer.format('yyyy.mm.dd hh:ii:ss');
DateFixer.toDataString()

DateFixer.format('dd.mm.yyyy');
DateFixer.add('day', 10);
DateFixer.toDataString()

DateFixer.sub('day', 5); 
// eq with
DateFixer.add('day', -5);
DateFixer.toDataString()

DateFixer.parse('2021.05.03', 'yyyy.mm.dd').toDateString()
```