from io import StringIO
from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
from pdfminer.converter import TextConverter
from pdfminer.layout import LAParams
from pdfminer.pdfpage import PDFPage
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from numpy import linalg as LA

class PdfTool:
	def convert(fname, pages=None):
	    if not pages:
	        pagenums = set()
	    else:
	        pagenums = set(pages)

	    output = StringIO()
	    manager = PDFResourceManager()
	    converter = TextConverter(manager, output, laparams=LAParams())
	    interpreter = PDFPageInterpreter(manager, converter)

	    infile = open(fname, 'rb')
	    for page in PDFPage.get_pages(infile, pagenums):
	        interpreter.process_page(page)
	    infile.close()
	    converter.close()
	    text = output.getvalue()
	    output.close
	    return text 

	def storeScore(fname, desc):
		text = open(fname.replace(".pdf", ".txt"),'r', encoding='utf-8').read()
		separator = ",;:?-_/"
		for char in separator :
		    text=text.replace(char," ")
		text = text.lower()

		text = text.replace("c++"," cpp")
		text = text.replace("c#"," csharp")
		text = text.replace(" r "," langager")
		text = text.replace(" go "," langagego")
		text = text.replace(" vb "," langagevb")
		text = text.replace(" .net "," net")

		print(desc)
		description = desc
		print(description)
		for char in separator :
		    description=description.replace(char," ")
		description=description.lower()
		description = description.replace(" c++"," cpp")
		description = description.replace(" c#"," csharp")
		description = description.replace(" r "," langager")
		description = description.replace(" go "," langagego")
		description = description.replace(" vb "," langagevb")
		description = description.replace(" .net "," net")

		webLanguages = {"rdf":88,"web":87,"cloud":86,"windows":85,"allemand":83,"anglais":84, "ingénieur":13, "langagego":12,"javascript":11,"php":6,"net":5,"csharp":7,"langagevb":4,"cpp":8,"java":10,"python":9,"ruby":2,"swift":3,"html":0,"css":14,"langager":1,"scala":15,"perl":16,"scheme":17,"matlab":18,"assembleur":19,"arduino":20,"shell":21,"typescipt":22,"objectifc":23,"rust":24,"powershell":25,"kotlin":26,"node.js":27,"symfony":28,"larvel":29,"phalcon":30,"angular":31,"angular js":32,"react.js":33,"vue.js":34,"unix":35,"mysql":36,"oracle":37,"mongodb":38,"sqlite":39,"bootstrap":40,"uml":41,"merise":42,"android":43,"spring":44,"jquery":45,"sécurité":46,"webservice":47,"rest":48,"linux":49,"jee":50,"wordpress":51,"formation":52,"expérience":53,"mobile":54,"xml":55,"swing":56,"eclipse":57,"netbeans":58,"visual studio":59,"scrum":60,"logiciel":61,"reseaux":62,"chef":63,"manager":64,"directeur":65,"intelligence artificielle":66,"hadoop":67,"tensorflow":68,"nosql":69,"ajax":70,"apache":71,"postegre":72,"xamarin":73,"developpeur":74,"projet":75,"algorithmique":76,"base de données":77,"embarqué":78,"repartie":79,"ios":80,"wan":81,"lan":82 }


		countT = CountVectorizer(vocabulary=webLanguages)
		countT.fit([])

		#print(countT.vocabulary)


		#print(len(countT.vocabulary))

		cv_list = [text]
		offre_list = [description]

		cv_matrix = countT.transform(cv_list)
		offre_matrix = countT.transform(offre_list)



		print(type(cv_matrix)) 

		print(type(cv_matrix.toarray())) 

		print(cv_matrix.toarray())
		print(offre_matrix.toarray())


		score = cosine_similarity(cv_matrix, offre_matrix)*LA.norm(cv_matrix.toarray())*LA.norm(offre_matrix.toarray())
		return score