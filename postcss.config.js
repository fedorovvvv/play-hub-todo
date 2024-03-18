import autoprefixer from 'autoprefixer';
import postCssImport from 'postcss-import';
import postcssNested from 'postcss-nested';

export default {
	plugins: [autoprefixer, postCssImport, postcssNested()]
};
