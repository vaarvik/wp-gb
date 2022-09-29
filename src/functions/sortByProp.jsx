const sortByProp = (array, prop) => array.sort((a, b) =>  a[prop] > b[prop] ? 1 : (a[prop] < b[prop] ? -1 : 0));

export default sortByProp;