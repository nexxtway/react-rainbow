const merge = (...args) => {
    // create a new object
    const target = {};

    // deep merge the object into the target object
    const merger = obj => {
        const keys = Object.keys(obj);
        keys.forEach(prop => {
            if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                // if the property is a nested object
                target[prop] = merge(target[prop], obj[prop]);
            } else {
                // for regular property
                target[prop] = obj[prop];
            }
        });
    };

    // iterate through all objects and
    // deep merge them with target
    args.forEach(obj => {
        if (obj) {
            merger(obj);
        }
    });

    return target;
};

export default merge;
