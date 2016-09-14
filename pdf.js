

require('pdfjs-dist');
var fs = require('fs');


class Pdf {
	constructor(filename){
		let pdf_path = __dirname + `/assets/${filename}.pdf`
		this.data = new Uint8Array(fs.readFileSync(pdf_path));
	}
	read(pageNum, callback){
		PDFJS.getDocument(this.data).then(function (pdfDocument) {
		  console.log('Number of pages: ' + pdfDocument.numPages);
		   pdfDocument.getPage(pageNum).then(function(page){
		      page.getTextContent().then(content=>{
		          var str=""
		          content.items.map(item=>str+=item.str)
		          var arr = str.split(' ')
		          console.log(str)
				  callback(str)
			  }
		   )})
		});
	}
}
module.exports = {
	Pdf
}
