["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/string/stringformat.js"],"~:js","goog.provide(\"goog.string.format\");\ngoog.require(\"goog.string\");\ngoog.string.format = function(formatString, var_args) {\n  function replacerDemuxer(match, flags, width, dotp, precision, type, offset, wholeString) {\n    if (type == \"%\") {\n      return \"%\";\n    }\n    var value = args.shift();\n    if (typeof value == \"undefined\") {\n      throw new Error(\"[goog.string.format] Not enough arguments\");\n    }\n    arguments[0] = value;\n    return goog.string.format.demuxes_[type].apply(null, arguments);\n  }\n  var args = Array.prototype.slice.call(arguments);\n  var template = args.shift();\n  if (typeof template == \"undefined\") {\n    throw new Error(\"[goog.string.format] Template required\");\n  }\n  var formatRe = /%([0\\- \\+]*)(\\d+)?(\\.(\\d+))?([%sfdiu])/g;\n  return template.replace(formatRe, replacerDemuxer);\n};\ngoog.string.format.demuxes_ = {};\ngoog.string.format.demuxes_[\"s\"] = function(value, flags, width, dotp, precision, type, offset, wholeString) {\n  var replacement = value;\n  if (isNaN(width) || width == \"\" || replacement.length >= Number(width)) {\n    return replacement;\n  }\n  if (flags.indexOf(\"-\", 0) > -1) {\n    replacement = replacement + goog.string.repeat(\" \", Number(width) - replacement.length);\n  } else {\n    replacement = goog.string.repeat(\" \", Number(width) - replacement.length) + replacement;\n  }\n  return replacement;\n};\ngoog.string.format.demuxes_[\"f\"] = function(value, flags, width, dotp, precision, type, offset, wholeString) {\n  var replacement = value.toString();\n  if (!(isNaN(precision) || precision == \"\")) {\n    replacement = parseFloat(value).toFixed(precision);\n  }\n  var sign;\n  if (Number(value) < 0) {\n    sign = \"-\";\n  } else if (flags.indexOf(\"+\") >= 0) {\n    sign = \"+\";\n  } else if (flags.indexOf(\" \") >= 0) {\n    sign = \" \";\n  } else {\n    sign = \"\";\n  }\n  if (Number(value) >= 0) {\n    replacement = sign + replacement;\n  }\n  if (isNaN(width) || replacement.length >= Number(width)) {\n    return replacement;\n  }\n  replacement = isNaN(precision) ? Math.abs(Number(value)).toString() : Math.abs(Number(value)).toFixed(precision);\n  var padCount = Number(width) - replacement.length - sign.length;\n  if (flags.indexOf(\"-\", 0) >= 0) {\n    replacement = sign + replacement + goog.string.repeat(\" \", padCount);\n  } else {\n    var paddingChar = flags.indexOf(\"0\", 0) >= 0 ? \"0\" : \" \";\n    replacement = sign + goog.string.repeat(paddingChar, padCount) + replacement;\n  }\n  return replacement;\n};\ngoog.string.format.demuxes_[\"d\"] = function(value, flags, width, dotp, precision, type, offset, wholeString) {\n  return goog.string.format.demuxes_[\"f\"](parseInt(value, 10), flags, width, dotp, 0, type, offset, wholeString);\n};\ngoog.string.format.demuxes_[\"i\"] = goog.string.format.demuxes_[\"d\"];\ngoog.string.format.demuxes_[\"u\"] = goog.string.format.demuxes_[\"d\"];\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Implementation of sprintf-like, python-%-operator-like,\n * .NET-String.Format-like functionality. Uses JS string's replace method to\n * extract format specifiers and sends those specifiers to a handler function,\n * which then, based on conversion type part of the specifier, calls the\n * appropriate function to handle the specific conversion.\n * For specific functionality implemented, look at formatRe below, or look\n * at the tests.\n */\n\ngoog.provide('goog.string.format');\n\ngoog.require('goog.string');\n\n\n// TODO(johnlenz): goog.string.format should not accept undefined as a parameter\n/**\n * Performs sprintf-like conversion, i.e. puts the values in a template.\n * DO NOT use it instead of built-in conversions in simple cases such as\n * 'Cost: %.2f' as it would introduce unnecessary latency opposed to\n * 'Cost: ' + cost.toFixed(2).\n * @param {string} formatString Template string containing % specifiers.\n * @param {...(string|number|undefined)} var_args Values formatString is to\n *     be filled with.\n * @return {string} Formatted string.\n */\ngoog.string.format = function(formatString, var_args) {\n  'use strict';\n  // Convert the arguments to an array (MDC recommended way).\n  const args = Array.prototype.slice.call(arguments);\n\n  // Try to get the template.\n  const template = args.shift();\n  if (typeof template == 'undefined') {\n    throw new Error('[goog.string.format] Template required');\n  }\n\n  // This re is used for matching, it also defines what is supported.\n  const formatRe = /%([0\\-\\ \\+]*)(\\d+)?(\\.(\\d+))?([%sfdiu])/g;\n\n  /**\n   * Chooses which conversion function to call based on type conversion\n   * specifier.\n   * @param {string} match Contains the re matched string.\n   * @param {string} flags Formatting flags.\n   * @param {string} width Replacement string minimum width.\n   * @param {string} dotp Matched precision including a dot.\n   * @param {string} precision Specifies floating point precision.\n   * @param {string} type Type conversion specifier.\n   * @param {string} offset Matching location in the original string.\n   * @param {string} wholeString Has the actualString being searched.\n   * @return {string} Formatted parameter.\n   */\n  function replacerDemuxer(\n      match, flags, width, dotp, precision, type, offset, wholeString) {\n    // The % is too simple and doesn't take an argument.\n    if (type == '%') {\n      return '%';\n    }\n\n    // Try to get the actual value from parent function.\n    const value = args.shift();\n\n    // If we didn't get any arguments, fail.\n    if (typeof value == 'undefined') {\n      throw new Error('[goog.string.format] Not enough arguments');\n    }\n\n    // Patch the value argument to the beginning of our type specific call.\n    arguments[0] = value;\n\n    return goog.string.format.demuxes_[type].apply(null, arguments);\n  }\n\n  return template.replace(formatRe, replacerDemuxer);\n};\n\n\n/**\n * Contains various conversion functions (to be filled in later on).\n * @private {!Object}\n */\ngoog.string.format.demuxes_ = {};\n\n\n/**\n * Processes %s conversion specifier.\n * @param {string} value Contains the formatRe matched string.\n * @param {string} flags Formatting flags.\n * @param {string} width Replacement string minimum width.\n * @param {string} dotp Matched precision including a dot.\n * @param {string} precision Specifies floating point precision.\n * @param {string} type Type conversion specifier.\n * @param {string} offset Matching location in the original string.\n * @param {string} wholeString Has the actualString being searched.\n * @return {string} Replacement string.\n */\ngoog.string.format.demuxes_['s'] = function(\n    value, flags, width, dotp, precision, type, offset, wholeString) {\n  'use strict';\n  let replacement = value;\n  // If no padding is necessary we're done.\n  // The check for '' is necessary because Firefox incorrectly provides the\n  // empty string instead of undefined for non-participating capture groups,\n  // and isNaN('') == false.\n  if (isNaN(width) || width == '' || replacement.length >= Number(width)) {\n    return replacement;\n  }\n\n  // Otherwise we should find out where to put spaces.\n  if (flags.indexOf('-', 0) > -1) {\n    replacement = replacement +\n        goog.string.repeat(' ', Number(width) - replacement.length);\n  } else {\n    replacement = goog.string.repeat(' ', Number(width) - replacement.length) +\n        replacement;\n  }\n  return replacement;\n};\n\n\n/**\n * Processes %f conversion specifier.\n * @param {string} value Contains the formatRe matched string.\n * @param {string} flags Formatting flags.\n * @param {string} width Replacement string minimum width.\n * @param {string} dotp Matched precision including a dot.\n * @param {string} precision Specifies floating point precision.\n * @param {string} type Type conversion specifier.\n * @param {string} offset Matching location in the original string.\n * @param {string} wholeString Has the actualString being searched.\n * @return {string} Replacement string.\n */\ngoog.string.format.demuxes_['f'] = function(\n    value, flags, width, dotp, precision, type, offset, wholeString) {\n  'use strict';\n  let replacement = value.toString();\n\n  // The check for '' is necessary because Firefox incorrectly provides the\n  // empty string instead of undefined for non-participating capture groups,\n  // and isNaN('') == false.\n  if (!(isNaN(precision) || precision == '')) {\n    replacement = parseFloat(value).toFixed(precision);\n  }\n\n  // Generates sign string that will be attached to the replacement.\n  let sign;\n  if (Number(value) < 0) {\n    sign = '-';\n  } else if (flags.indexOf('+') >= 0) {\n    sign = '+';\n  } else if (flags.indexOf(' ') >= 0) {\n    sign = ' ';\n  } else {\n    sign = '';\n  }\n\n  if (Number(value) >= 0) {\n    replacement = sign + replacement;\n  }\n\n  // If no padding is necessary we're done.\n  if (isNaN(width) || replacement.length >= Number(width)) {\n    return replacement;\n  }\n\n  // We need a clean signless replacement to start with\n  replacement = isNaN(precision) ? Math.abs(Number(value)).toString() :\n                                   Math.abs(Number(value)).toFixed(precision);\n\n  const padCount = Number(width) - replacement.length - sign.length;\n\n  // Find out which side to pad, and if it's left side, then which character to\n  // pad, and set the sign on the left and padding in the middle.\n  if (flags.indexOf('-', 0) >= 0) {\n    replacement = sign + replacement + goog.string.repeat(' ', padCount);\n  } else {\n    // Decides which character to pad.\n    const paddingChar = (flags.indexOf('0', 0) >= 0) ? '0' : ' ';\n    replacement =\n        sign + goog.string.repeat(paddingChar, padCount) + replacement;\n  }\n\n  return replacement;\n};\n\n\n/**\n * Processes %d conversion specifier.\n * @param {string} value Contains the formatRe matched string.\n * @param {string} flags Formatting flags.\n * @param {string} width Replacement string minimum width.\n * @param {string} dotp Matched precision including a dot.\n * @param {string} precision Specifies floating point precision.\n * @param {string} type Type conversion specifier.\n * @param {string} offset Matching location in the original string.\n * @param {string} wholeString Has the actualString being searched.\n * @return {string} Replacement string.\n */\ngoog.string.format.demuxes_['d'] = function(\n    value, flags, width, dotp, precision, type, offset, wholeString) {\n  'use strict';\n  return goog.string.format.demuxes_['f'](\n      parseInt(value, 10) /* value */, flags, width, dotp, 0 /* precision */,\n      type, offset, wholeString);\n};\n\n\n// These are additional aliases, for integer conversion.\ngoog.string.format.demuxes_['i'] = goog.string.format.demuxes_['d'];\ngoog.string.format.demuxes_['u'] = goog.string.format.demuxes_['d'];\n","~:compiled-at",1714505072713,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.string.stringformat.js\",\n\"lineCount\":72,\n\"mappings\":\"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\",\n\"sources\":[\"goog/string/stringformat.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Implementation of sprintf-like, python-%-operator-like,\\n * .NET-String.Format-like functionality. Uses JS string's replace method to\\n * extract format specifiers and sends those specifiers to a handler function,\\n * which then, based on conversion type part of the specifier, calls the\\n * appropriate function to handle the specific conversion.\\n * For specific functionality implemented, look at formatRe below, or look\\n * at the tests.\\n */\\n\\ngoog.provide('goog.string.format');\\n\\ngoog.require('goog.string');\\n\\n\\n// TODO(johnlenz): goog.string.format should not accept undefined as a parameter\\n/**\\n * Performs sprintf-like conversion, i.e. puts the values in a template.\\n * DO NOT use it instead of built-in conversions in simple cases such as\\n * 'Cost: %.2f' as it would introduce unnecessary latency opposed to\\n * 'Cost: ' + cost.toFixed(2).\\n * @param {string} formatString Template string containing % specifiers.\\n * @param {...(string|number|undefined)} var_args Values formatString is to\\n *     be filled with.\\n * @return {string} Formatted string.\\n */\\ngoog.string.format = function(formatString, var_args) {\\n  'use strict';\\n  // Convert the arguments to an array (MDC recommended way).\\n  const args = Array.prototype.slice.call(arguments);\\n\\n  // Try to get the template.\\n  const template = args.shift();\\n  if (typeof template == 'undefined') {\\n    throw new Error('[goog.string.format] Template required');\\n  }\\n\\n  // This re is used for matching, it also defines what is supported.\\n  const formatRe = /%([0\\\\-\\\\ \\\\+]*)(\\\\d+)?(\\\\.(\\\\d+))?([%sfdiu])/g;\\n\\n  /**\\n   * Chooses which conversion function to call based on type conversion\\n   * specifier.\\n   * @param {string} match Contains the re matched string.\\n   * @param {string} flags Formatting flags.\\n   * @param {string} width Replacement string minimum width.\\n   * @param {string} dotp Matched precision including a dot.\\n   * @param {string} precision Specifies floating point precision.\\n   * @param {string} type Type conversion specifier.\\n   * @param {string} offset Matching location in the original string.\\n   * @param {string} wholeString Has the actualString being searched.\\n   * @return {string} Formatted parameter.\\n   */\\n  function replacerDemuxer(\\n      match, flags, width, dotp, precision, type, offset, wholeString) {\\n    // The % is too simple and doesn't take an argument.\\n    if (type == '%') {\\n      return '%';\\n    }\\n\\n    // Try to get the actual value from parent function.\\n    const value = args.shift();\\n\\n    // If we didn't get any arguments, fail.\\n    if (typeof value == 'undefined') {\\n      throw new Error('[goog.string.format] Not enough arguments');\\n    }\\n\\n    // Patch the value argument to the beginning of our type specific call.\\n    arguments[0] = value;\\n\\n    return goog.string.format.demuxes_[type].apply(null, arguments);\\n  }\\n\\n  return template.replace(formatRe, replacerDemuxer);\\n};\\n\\n\\n/**\\n * Contains various conversion functions (to be filled in later on).\\n * @private {!Object}\\n */\\ngoog.string.format.demuxes_ = {};\\n\\n\\n/**\\n * Processes %s conversion specifier.\\n * @param {string} value Contains the formatRe matched string.\\n * @param {string} flags Formatting flags.\\n * @param {string} width Replacement string minimum width.\\n * @param {string} dotp Matched precision including a dot.\\n * @param {string} precision Specifies floating point precision.\\n * @param {string} type Type conversion specifier.\\n * @param {string} offset Matching location in the original string.\\n * @param {string} wholeString Has the actualString being searched.\\n * @return {string} Replacement string.\\n */\\ngoog.string.format.demuxes_['s'] = function(\\n    value, flags, width, dotp, precision, type, offset, wholeString) {\\n  'use strict';\\n  let replacement = value;\\n  // If no padding is necessary we're done.\\n  // The check for '' is necessary because Firefox incorrectly provides the\\n  // empty string instead of undefined for non-participating capture groups,\\n  // and isNaN('') == false.\\n  if (isNaN(width) || width == '' || replacement.length >= Number(width)) {\\n    return replacement;\\n  }\\n\\n  // Otherwise we should find out where to put spaces.\\n  if (flags.indexOf('-', 0) > -1) {\\n    replacement = replacement +\\n        goog.string.repeat(' ', Number(width) - replacement.length);\\n  } else {\\n    replacement = goog.string.repeat(' ', Number(width) - replacement.length) +\\n        replacement;\\n  }\\n  return replacement;\\n};\\n\\n\\n/**\\n * Processes %f conversion specifier.\\n * @param {string} value Contains the formatRe matched string.\\n * @param {string} flags Formatting flags.\\n * @param {string} width Replacement string minimum width.\\n * @param {string} dotp Matched precision including a dot.\\n * @param {string} precision Specifies floating point precision.\\n * @param {string} type Type conversion specifier.\\n * @param {string} offset Matching location in the original string.\\n * @param {string} wholeString Has the actualString being searched.\\n * @return {string} Replacement string.\\n */\\ngoog.string.format.demuxes_['f'] = function(\\n    value, flags, width, dotp, precision, type, offset, wholeString) {\\n  'use strict';\\n  let replacement = value.toString();\\n\\n  // The check for '' is necessary because Firefox incorrectly provides the\\n  // empty string instead of undefined for non-participating capture groups,\\n  // and isNaN('') == false.\\n  if (!(isNaN(precision) || precision == '')) {\\n    replacement = parseFloat(value).toFixed(precision);\\n  }\\n\\n  // Generates sign string that will be attached to the replacement.\\n  let sign;\\n  if (Number(value) < 0) {\\n    sign = '-';\\n  } else if (flags.indexOf('+') >= 0) {\\n    sign = '+';\\n  } else if (flags.indexOf(' ') >= 0) {\\n    sign = ' ';\\n  } else {\\n    sign = '';\\n  }\\n\\n  if (Number(value) >= 0) {\\n    replacement = sign + replacement;\\n  }\\n\\n  // If no padding is necessary we're done.\\n  if (isNaN(width) || replacement.length >= Number(width)) {\\n    return replacement;\\n  }\\n\\n  // We need a clean signless replacement to start with\\n  replacement = isNaN(precision) ? Math.abs(Number(value)).toString() :\\n                                   Math.abs(Number(value)).toFixed(precision);\\n\\n  const padCount = Number(width) - replacement.length - sign.length;\\n\\n  // Find out which side to pad, and if it's left side, then which character to\\n  // pad, and set the sign on the left and padding in the middle.\\n  if (flags.indexOf('-', 0) >= 0) {\\n    replacement = sign + replacement + goog.string.repeat(' ', padCount);\\n  } else {\\n    // Decides which character to pad.\\n    const paddingChar = (flags.indexOf('0', 0) >= 0) ? '0' : ' ';\\n    replacement =\\n        sign + goog.string.repeat(paddingChar, padCount) + replacement;\\n  }\\n\\n  return replacement;\\n};\\n\\n\\n/**\\n * Processes %d conversion specifier.\\n * @param {string} value Contains the formatRe matched string.\\n * @param {string} flags Formatting flags.\\n * @param {string} width Replacement string minimum width.\\n * @param {string} dotp Matched precision including a dot.\\n * @param {string} precision Specifies floating point precision.\\n * @param {string} type Type conversion specifier.\\n * @param {string} offset Matching location in the original string.\\n * @param {string} wholeString Has the actualString being searched.\\n * @return {string} Replacement string.\\n */\\ngoog.string.format.demuxes_['d'] = function(\\n    value, flags, width, dotp, precision, type, offset, wholeString) {\\n  'use strict';\\n  return goog.string.format.demuxes_['f'](\\n      parseInt(value, 10) /* value */, flags, width, dotp, 0 /* precision */,\\n      type, offset, wholeString);\\n};\\n\\n\\n// These are additional aliases, for integer conversion.\\ngoog.string.format.demuxes_['i'] = goog.string.format.demuxes_['d'];\\ngoog.string.format.demuxes_['u'] = goog.string.format.demuxes_['d'];\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"string\",\"format\",\"goog.string.format\",\"formatString\",\"var_args\",\"replacerDemuxer\",\"match\",\"flags\",\"width\",\"dotp\",\"precision\",\"type\",\"offset\",\"wholeString\",\"value\",\"args\",\"shift\",\"Error\",\"arguments\",\"demuxes_\",\"apply\",\"Array\",\"prototype\",\"slice\",\"call\",\"template\",\"formatRe\",\"replace\",\"replacement\",\"isNaN\",\"length\",\"Number\",\"indexOf\",\"repeat\",\"toString\",\"parseFloat\",\"toFixed\",\"sign\",\"Math\",\"abs\",\"padCount\",\"paddingChar\",\"parseInt\"]\n}\n"]