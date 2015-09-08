## Budget Command Line Tool

/lib/cmd let's you interact with the budget database just like the budget application.  You have access to all model's and their functions.

#### Commands

Print all available models and functions.  Ignore the callback parameter, it's not required.
```
node lib/cmd --help
```

Run model function.
```
node lib/cmd [-m | --model] [model_name] [-f | --function] [function_name] parameters

// ex
node lib/cmd -m materials -f find '{name:"tractor",regex:true}'
```

Any parameter that 'looks like' JSON will be parsed as such.

#### Other

```
node /test/populateExamples
```
can be used to populate MongoDB from the example budgets from this repo.  Currently the name, locality and authority need to be provided at the top of the file.  The authority needs to exist in the DB:
```
node lib/cmd -m authority -f save '{name:"AHB",description:"Advanced Hardwood Biofuels, PNW"}'
```
The budget name needs to be exposed in /lib/shared/index.js in examples.app
