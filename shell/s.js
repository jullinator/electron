#! /usr/bin/env node
require('shelljs/global');
const {File} = require('./classes')


function make (dir='dir', files = []){
	mkdir(dir)
	files.map(file=>touch(`${dir}/${file}.js`))
}


// make('t1', ['store','books','whatever'])
let file = new File(false, 'test')
file.replace('VERSION',`let version = 2.0`)
