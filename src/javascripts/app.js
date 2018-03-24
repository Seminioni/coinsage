import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import * as modal from 'components/modal/index.js';
import * as tooltip from 'components/tooltip/index.js';

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))
