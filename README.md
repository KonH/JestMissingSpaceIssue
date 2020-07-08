# Jest Missing Space Issue

To reproduce issue:
```
npm t
```

Output:
```
> example-getting-started@0.0.0 test /Users/konh/Projects/JestMissingSpaceIssue
> jest --coverage

 PASS  ./sum.test.js
  ✓ adds 1 + 2 to equal 3 (3 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |      60 |       50 |     100 |      60 |                   
 sum.js   |      60 |       50 |     100 |      60 | 5-6               
----------|---------|----------|---------|---------|-------------------
Jest: Uncovered count for statements (2)exceeds global threshold (1)
Jest: "global" coverage threshold for branches (80%) not met: 50%
Jest: "global" coverage threshold for lines (80%) not met: 60%
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.681 s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
```

Not properly formatted line:
```
Jest: Uncovered count for statements (2)exceeds global threshold (1)
```

Expected value:
```
Jest: Uncovered count for statements (2) exceeds global threshold (1)
```