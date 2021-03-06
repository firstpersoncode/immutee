module.exports = (head, obj) => {
	if (head === '$end') {
		head = obj.length - 1;
	}
	if (!/^\+?\d+$/.test(head)) {
		throw new Error('Array index \'' + head + '\' has to be an integer');
	}
	return parseInt(head);
};
