export default function curry(fn) {
    
    function curried(...args) {

        const context = this;
        // Enough arguments?
        if (args.length >= fn.length) {
            return fn.apply(context, args);
        }

        // Need more arguments
        return function (...nextArgs) {
            if (nextArgs.length === 0) {
                return curried.apply(context, args);
            }

            return curried.apply(context, [...args, ...nextArgs]);
        };
    }

    return curried;
}
