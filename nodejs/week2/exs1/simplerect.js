/**
 * @author Gilson Varghese <gilsonvarghese7@gmail.com>
 * @date 25 March 2018
 * @fileoverview Test application to demo module export in nodejs
 */

exports.perimeter= function(x, y) {
		return 2*(x+y);
	};

exports.area= function(x, y) {
		return x*y;
	};
