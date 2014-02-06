# Livboj ![Logo](images/logo.png)

Simple issue tracker via cli

### Notes

The idea behind this project is to read testers spreadsheet from Google Drive and display it in a pretty table via terminal. 

**Example:**

```
$ livboj

┌──────────┬────────────────┬──────┬─────────┬─────────────────────────────┬────────────┐
│ Issue ID │ Issue name     │ Prio │ Type    │ Description                 │ Status     │
├──────────┼────────────────┼──────┼─────────┼─────────────────────────────┼────────────┤
│ 1        │ Add caterings  │ 3    │ Feature │ You need to be able to add  │            │
│          │                │      │         │ caterings to the booking    │ Not Solved │
├──────────┼────────────────┼──────┼─────────┼─────────────────────────────┼────────────┤
│ 2        │ Server crashes │ 10   │ Bug     │ Add monitoring to see why   │            │
│          │                │      │         │ server suddenly crashes     │ Not Solved │
└──────────┴────────────────┴──────┴─────────┴─────────────────────────────┴────────────┘
```

**TODO:**

* Simple Google Spreadsheet read
* Sync with github issues
* Cooperate with watson
* Check issue as solved i.e. <code>$ livboj 'Add caterings' solved</code> or <code>$ livboj 1 solved</code>

**Present modules:**

* cli-table
* colors
* tabletop

#### Licence: MIT
