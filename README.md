A small repository to test jest speed
=====================================

I use jest intensively in many of my developments, but recently I have observed that testing time has increased up to 5 seconds by spec file, which is unacceptable. 

I also have observed that how long is a test and how many tests does it have is not relevant. Complex and large spec files take almost the same time to execute that small and quick tests. However, in all specs, the production code is the same, only changes which entry point is using each test.

Because I have experience in concurrent systems and I know how hard it is to parallelize work effectively, I have tried to execute the benchmarks with --runInBand. For my big surprise, the testing time has improved in all cases; in some cases, it is just 50% faster; in other cases, it is up to 8 times faster.

I have a MacBook Pro from two years ago:

```
$ sysctl -n machdep.cpu.brand_string
Intel(R) Core(TM) i5-6267U CPU @ 2.90GHz
$ sw_vers
ProductName:    Mac OS X
ProductVersion:    10.14.3
BuildVersion:    18D109
```

At https://github.com/drpicox/jest-speed I provide a small example of the speed of jest. 

The results of the second execution of each case are:

```
$ yarn test
Test Suites: 26 passed, 26 total
Tests:       26 passed, 26 total
Snapshots:   0 total
Time:        6.842s
``` 

```
$ yarn test --runInBand
Test Suites: 26 passed, 26 total
Tests:       26 passed, 26 total
Snapshots:   0 total
Time:        3.497s
```

```
$ yarn test --maxWorkers=1
Test Suites: 26 passed, 26 total
Tests:       26 passed, 26 total
Snapshots:   0 total
Time:        3.448s
```

Javascript code, specs and src are generated with `gen.sh`.
Feel free to modify it and check other code structures.
The total number of files under src is 730.