/**
 * Created by David Aleks Toska on 08/16/2017.
 *
 * C:\Users\David Toska\AppData\Roaming\npm\node_modules\protractor\bin
 */
exports.config = {
    getPageTimeout: 120000,

    specs: [
        './spec/resourcepage_spec.js',
        //'lean-spec.js',
        //'swecom-spec.js'
    ],

    /**
     * If this is set to be true, specs will be sharded by file (i.e. all
     * files to be run by this set of capabilities will run in parallel).
     * Default is false.
     */
    shardTestFiles: true,

/**
 * Maximum number of browser instances that can run in parallel for this
 * set of capabilities. This is only needed if shardTestFiles is true.
 * Default is 1.
 */
    maxInstances: 10

};


/**
 *     suites: {
        lean: 'lean-spec.js',
        swecom: 'swecom-spec.js'
    }
 *
 */

