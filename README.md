## Javascript Test.

Given an ordered set of data in the following format:

```javascript
[
    { id: 8, flightTime:  500, stops: false },
    { id: 7, flightTime: 1500, stops: true  },
    { id: 1, flightTime:  100, stops: true  },
    { id: 7, flightTime: 1000, stops: false },
    { id: 7, flightTime: 2000, stops: false },
    { id: 2, flightTime: 2000, stops: true  },
    { id: 2, flightTime: 2000, stops: true  }
]
```

Write a method named `select`. `select` is used to return items from this set.
It has the interface `select(dataSet [, options])`. The options available should include:

- `id`: get just the items with this id
- `stops`: if `true`, just those with `stops: true`, likewise for `false`.
- `minFlightTime`: get just the items with `flightTime` equal to or greater than this number.
- `merge`: if set to `true`...
    - Items with matching ids should be merged into one item. When merging:
        - sum the `flightTime` fields
        - if any of the `stops` fields are `false` the result should be `false`
    - The other filter options should be applied to the merged data

The order of the results should always remain unchanged from the original set, and in the case of merging items with
duplicate ids, the row should take the place of the latest occurrence of that id. The input objects should not be
modified.

For example, given the set above...:

```javascript
select(items);
/*
[
    { id: 8, flightTime:  500, stops: false },
    { id: 7, flightTime: 1500, stops: true  },
    { id: 1, flightTime:  100, stops: true  },
    { id: 7, flightTime: 1000, stops: false },
    { id: 7, flightTime: 2000, stops: false },
    { id: 2, flightTime: 2000, stops: true  },
    { id: 2, flightTime: 2000, stops: true  }
]
*/

select(items, { merge: true });
/*
[
    { id: 8, flightTime:  500, stops: false },
    { id: 1, flightTime:  100, stops: true  },
    { id: 7, flightTime: 4500, stops: false },
    { id: 2, flightTime: 4000, stops: true  }
]
*/

select(items, { id: 2 });
/*
[
    { id: 2, flightTime: 2000, stops: true  },
    { id: 2, flightTime: 2000, stops: true  }
]
*/

select(items, { minflightTime: 4000 });
/*
[]
*/

select(items, { merge: true, minflightTime: 4000 })

/*
[
    { id: 7, flightTime: 4500, stops: false },
    { id: 2, flightTime: 4000, stops: true  }
]
*/
```

A larger data set is provided in `sample-data.json`.

### Notes

- Please include a UI which can be seen to validate your solution (a simple html5/Css3 would be fine).
- There is no need to use third party labriries or Js frameworks...

Good Luck!