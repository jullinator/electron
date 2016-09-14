#! /usr/bin/env node
require('shelljs/global');

class File {
	constructor(path, file){
		path ? this.filePath=`${path}/${file}.js` : this.filePath = `${file}.js` ;
		this.replace = function(key, value){
			sed('-i', key , value, this.filePath);
		}
	}
	create(){
		touch(this.filePath)
	}

}

module.exports = {
	File
}
