const fs = require('fs');
const path = require('path');

// 读取原始的 package.json 文件,读取就是js对象
const packageJson = require('../src/assets/package.json');

// 添加新的字段或修改现有字段。修改版本
// packageJson.private = false;
const versionArr = packageJson.version.split('.');
versionArr[2] = Number(versionArr[2]) + 1;
packageJson.version = versionArr.join('.');

// 写入新的 package.json 到 dist 目录
fs.writeFileSync(path.resolve(__dirname, '../dist', 'package.json'), JSON.stringify(packageJson, null, 2));
