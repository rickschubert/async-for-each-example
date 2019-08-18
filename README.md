Async forEach - Executing a large amount of promises in batches
=============================================================

This example shows how we can execute a large number of asynchronous tasks in smaller installments. In our example (see index.js), we have a list of 100 numbers. We want to perform an asynchronous operation (a promise) for each of these elements. (A real-life example would be a large of array of users where we want to perform an API call for each user, i.e. to remove them from the database without causing a high load.) In order to do so without making all 100 calls at the same time, we can instead perform 10 times 10 executions.
