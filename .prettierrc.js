// Prettier配置文档：https://prettier.io/docs/en/options.html
module.exports = {
	printWidth: 180,
	tabWidth: 4,
	useTabs: false,
	// 句尾分号
	semi: true,
	singleQuote: true,
	quoteProps: "as-needed",
	jsxSingleQuote: false,
	//在jsx中把'>' 是否单独放一行
	jsxBracketSameLine: true,
	//结尾是否添加逗号
	trailingComma: "none",
	//对象括号俩边是否用空格隔开
	bracketSpacing: true,
	//组件最后的尖括号不另起一行
	bracketSameLine: false,
	//箭头函数参数始终添加括号
	arrowParens: "always",
	proseWrap: "preserve",
	//html存在空格是不敏感的
	htmlWhitespaceSensitivity: "ignore",
	//vue 的script和style的内容是否缩进
	vueIndentScriptAndStyle: true,
	endOfLine: "lf",
	embeddedLanguageFormatting: "auto",
	singleAttributePerLine: false,
	//自定义文件后缀对应的parser
	// parsers: {
	// 	".vue": "vue",
	// 	".ts": "typescript"
	// }
}