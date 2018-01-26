import { Application } from "stimulus";
import { autoload } from "stimulus/webpack-helpers";
import * as tooltip from 'components/tooltip/index.js';
import * as modal from 'components/modal/index.js';

const application = Application.start()
const controllers = require.context("./controllers", true, /\.js$/)
autoload(controllers, application)


