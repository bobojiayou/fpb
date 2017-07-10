const ArrayProto = Array.prototype
const slice = ArrayProto.slice

const rest = value => slice.call(value, 1)