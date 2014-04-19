var Request = require('../../request-class/Request');

function testVersion (version) {
	it(version, function (done) {
		new Request([
			'GET / HTTP/' + version + '\r\n\r\n'
		].join(''), [

		], /*function (type, value) {

		}*/done);
	});
}

function testVersions (versions) {

	var version;

	describe('standatd version - ', function () {

		for(var i = 0, len = versions.length; i < len; i++) {
			version = versions[i];
			testVersion(version);
		}

	});

}

module.exports = testVersions;