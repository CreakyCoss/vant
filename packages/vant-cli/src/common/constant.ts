import { join } from 'path';

export const CWD = process.cwd();
export const ES_DIR = join(CWD, 'es');
export const LIB_DIR = join(CWD, 'lib');
export const SRC_DIR = join(CWD, 'src');
export const DOCS_DIR = join(CWD, 'docs');
export const CONFIG_FILE = join(CWD, 'components.config.js');
export const PACKAGE_JSON_FILE = join(CWD, 'package.json');
export const WEBPACK_CONFIG_FILE = join(CWD, 'webpack.config.js');

export const DIST_DIR = join(__dirname, '../../dist');
export const CONFIG_DIR = join(__dirname, '../config');

export const PACKAGE_ENTRY_FILE = join(DIST_DIR, 'package-entry.js');
export const MOBILE_ENTRY_FILE = join(DIST_DIR, 'mobile-entry.js');
export const DESKTOP_ENTRY_FILE = join(DIST_DIR, 'desktop-entry.js');

export const JEST_CONFIG_FILE = join(CONFIG_DIR, 'jest.config.js');
export const BABEL_CONFIG_FILE = join(CONFIG_DIR, 'babel.config.js');
export const POSTCSS_CONFIG_FILE = join(CONFIG_DIR, 'postcss.config.js');
export const JEST_TRANSFORM_FILE = join(CONFIG_DIR, 'jest.transform.js');
export const JEST_FILE_MOCK_FILE = join(CONFIG_DIR, 'jest.file-mock.js');
export const JEST_STYLE_MOCK_FILE = join(CONFIG_DIR, 'jest.style-mock.js');
