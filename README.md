# stream-conclusion
Analyses streams to summarize the number of chunks and bytes passed

The given callback will be called when the stream ends, and provides an argument with the properties `chunks` and `bytes`.

Example:
```js
var streamConclusion = require('stream-conclusion');

function conclusion(result) {
  console.log(result.bytes + " bytes passed through in " + result.chunks + " chunks");
}

inStream.pipe(streamConclusion(conclusion)).pipe(outStream);
```
