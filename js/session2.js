/************************** Promise ****************************************/

let firstPromise = new Promise((resolveFn, rejectFn) => {
    let connection = false;

    if (connection) resolveFn("Connection Successful");
    else rejectFn(Error("No Connection"))
})

console.log(firstPromise)

firstPromise.then(
    resolveValue => console.log("Resolved Value : " + resolveValue),
    rejectionReason => console.error("Rejected Reason: " + rejectionReason)
)

console.log(firstPromise)