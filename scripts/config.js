// list of folders from where .js files are compiled and non-js files are symlinked
const dirs = [
	'chrome',
	'components',
	'defaults',
	'resource',
	'test',
	'test/resource/chai',
	'test/resource/chai-as-promised',
	'test/resource/mocha'
];

// list of folders from which all files are symlinked
const symlinkDirs = [
	'resource/tinymce',
	'styles',
	'translators'
];

// list of folders which are copied to the build folder
const copyDirs = [
	'test/tests/data'	// browser follows symlinks when loading test data
						// triggering false-positive test results with mismatched URIs
];

// list of files from root folder to symlink
const symlinkFiles = [
	'chrome.manifest', 'install.rdf', 'update.rdf'
];


// these files will be browserified during the build
const browserifyConfigs = [
	{
		src: 'node_modules/url/url.js',
		dest: 'resource/url.js',
		config: {
			standalone: 'url'
		}
	},
	{
		src: 'node_modules/sinon/lib/sinon.js',
		dest: 'test/resource/sinon.js',
		config: {
			standalone: 'sinon'
		}
	},
	{
		src: 'node_modules/chai-as-promised/lib/chai-as-promised.js',
		dest: 'test/resource/chai-as-promised.js',
		config: {
			standalone: 'chaiAsPromised'
		}
	}
];

// exclude mask used for js, copy, symlink and sass tasks
const ignoreMask = ['**/#*', '**/_*.scss'];

const jsFiles = [
	`{${dirs.join(',')}}/**/*.js`,
	`{${dirs.join(',')}}/**/*.jsx`,
	`!{${symlinkDirs.concat(copyDirs).join(',')}}/**/*.js`,
	`!{${symlinkDirs.concat(copyDirs).join(',')}}/**/*.jsx`
];

const scssFiles = [
	'scss/**/*.scss',
	'chrome/skin/default/zotero/**/*.scss'
];

module.exports = {
	dirs, symlinkDirs, copyDirs, symlinkFiles, browserifyConfigs, jsFiles, scssFiles, ignoreMask
};
